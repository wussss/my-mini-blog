/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { Wrapper } from './style'
import InfoGroup from '../InfoGroup'
import { useSelector, useDispatch } from '@/redux/store'
import { uploadFile } from '@/api/file'
import { userUpdate, getUserInfo } from '@/api/user'
import { message } from 'antd'
import '@/statics/iconfont/iconfont.css'
import default_avatar from '@/statics/girl.png'
interface infotype {
  title: string
  input: string
  placeholder: string
}
const infoList: Array<infotype> = [
  { title: '\ue657', input: 'username', placeholder: '用户名' },
  { title: '\ue62e', input: 'jobTitle', placeholder: '工作职位' },
  { title: '\ue679', input: 'company', placeholder: '公司' },
  { title: '\ue72f', input: '', placeholder: '个人信息' },
  { title: '\ue60c', input: '', placeholder: '个人主页' },
]

const Profile: React.FC = props => {
  const dispatch = useDispatch()
  const {
    user: { avatarLarge = default_avatar, id = '' },
  } = useSelector()
  const onUpload = useCallback(async (e: any) => {
    const formData = new FormData()
    const file = e.target.files[0]
    if (file.size > 5 * Math.pow(1024, 2)) {
      return message.warning('图片过大')
    }
    formData.append('file', file)
    const { url } = await uploadFile(formData)
    await userUpdate({
      avatarLarge: url,
    })
    const userInfo = await getUserInfo(id)
    dispatch({
      type: 'UPDATE_USER',
      payload: { user: { ...userInfo } },
    })
  }, [])
  return (
    <Wrapper avatarLarge={avatarLarge}>
      <ul className="InfoList">
        <li className="info avatar">
          <span className="iconfont title">&#xe70a;</span>
          <div className="previous"></div>
          <div className="upload-img">
            <span className="iconfont img-cover">&#xe63a;</span>
            <span>点击上传头像（支持 jpg、png格式,大小 5M 以内的图片）</span>
            <input type="file" accept="image/*" className="img-select" title="上传头像" onChange={onUpload} />
          </div>
        </li>
        {infoList.map(item => (
          <InfoGroup item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
export default Profile
