import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import '../../config/website'
import website from '../../config/website'

export default [
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/hibikipub',
    name: 'Twitter',
  },
  {
    icon: <FiMail />,
    url: `mailto:${website.contactEmail}`,
    name: 'Email',
  },
]
