import React from 'react'
import style from './footer.module.css'
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, FacebookFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.first}>
          <ul>
            <li><a>ONLİNE ALIŞ VERİŞ</a></li>
            <li><a>KADIN</a></li>
            <li><a>ERKEK</a></li>
            <li><a>ÇOCUK</a></li>
            <li><a>BEBEK</a></li>
            <li><a>Divided</a></li>
            <li><a>Spor</a></li>
          </ul>
        </div>
        <div className={style.second}>
          <ul>
            <li><a>KURUMSAL BİLGİLER</a></li>
            <li><a>H&M'de Kariyer<a/></a></li>
            <li><a>Hakkımızda</a></li>
            <li><a>Sürdürebilirlik</a></li>
            <li><a>Basın</a></li>
            <li><a>Yatırımcı İlişkileri</a></li>
            <li><a>Corporate Governance</a></li>
          </ul>


        </div>
        <div className={style.third}>


          <ul>
            <li><a>YARDIM</a></li>
            <li><a>Müşteri Hizmetleri</a></li>
            <li><a>Hesabım</a></li>
            <li><a>Mağaza Bul</a></li>
            <li><a>Yasalar ve Kurallar & Gizlilik</a></li>
            <li><a>İletişim</a></li>
            <li><a>Hediye Kartı</a></li>
          </ul>


        </div>

        

      </div>
      <div className={style.socialIcons}>
          <InstagramOutlined style={{marginRight:"40px"}} />
          <FacebookFilled    style={{marginRight:"40px"}}/>
          <TwitterOutlined   style={{marginRight:"40px"}}/>
          <YoutubeOutlined   style={{marginRight:"40px"}}/>

        </div>
    </>
  )
}

export default Footer
