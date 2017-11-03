function loadPosts () {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 'first-post',
        date: '2017-10-25',
        title: 'The adventures of Jenny and Garrett',
        type: 'text',
        body: `
          We will post updates about our travel adventures
          here. You can scroll up/down to see posts from the past,
          or find out where we're planning to be in the future.
        `,
        background: 'https://lh3.googleusercontent.com/qFImCEXHSuiUSsWtlwW_1LiJk0YWtnMJMU2qlNhJ8uSBVouUYpW6m5JQ3DWHqQ1v4So2wmAxgfM_UpmQPDrZrWJ0Z7hoJy8GgwOMwiQ65RYsphFrtkw5CnT3I7A4uLblKp0oAzCgOV0=w765-h574-no',
        color: '#42c8f4',
        location: '8 Spruce St, NYC'
      },
      {
        id: 'moving-out-mess',
        date: '2017-10-26',
        title: 'Moving out',
        type: 'text',
        body: `Progress is slow, but we're on track`,
        background: 'https://lh3.googleusercontent.com/EjQLLtKi1XGa5wpvkSQswjOuOlT4JgK5n63jm5lD_KElj4zWgVM0kAw264BVeOyC2jeovlZOpFMLIIqAfXznhP8DMrWgVgwYZ9iDGSUmLTBofAjrGKuI2TlgYPF6uXKMZFrV5hmmqh0=w740-h555-no',
        color: '#f44186',
        location: '8 Spruce St, NYC'
      },
      {
        id: 'moving-the-futon',
        date: '2017-10-28',
        title: 'Getting rid of furniture',
        type: 'image',
        body: 'https://lh3.googleusercontent.com/dwpnzka2at8Hcq2YbMFLPV-RJOCU8yr3gL-5edn-zAwV51yOem5TKBorDolioae6Sl3GAXuSorgxMkcf-nnMiy-D7Th9v0--DsToWzu9tag47yo-OY6gdtMbmcsyZnLXdPGtJoWtWME7fy0nBTUPNgO8BqK6xmNGbZ839K7Lu_URtHORyyXpbyAR8UApt8hmgc03KaGPj1c7k-m5JpmxKk-reZWG5kok2R2cQpnp_nbA4ygo9RlnSt0h2AirU-s8tAokdxonJrAvPGgKhUTYYLeH-Vtnju3d4AXZFrtK1dF2ZHo95TdVwWoSGamsscE1iUAx-dVfgNidePzDwHzh8MK-TSHLu1sH-cP_EOkEp7C0SVyT4maQP-N3sNrIrI2CIN5qpPmvJkVFhm2DCuGQUu1Gd0AcfN5ytHClhJdfg4sYXYG3XHqxW8X5WS6ToQRp0-3PMDYxGWXIxULYhoiviVDCGnF4_nann8ozloY3ThUPd9TCtbLcYRPZlJUhy5lp1PKc0YcO5-Pkkhf1u3oYdYRIz3-dKtTMPNUnFuN20AFjDgcg4xbkh0sZbO2r38oVHE4AyDStn2YGlqKiHjfp3a4v0RqIOKytH-1-ROd90Qz4sjISNUaY0mHBoun_WUSa1F9a5P2MiXmipwMELB2Un8h4QqehgGBdbfhW=w526-h701-no',
        background: 'https://lh3.googleusercontent.com/Tr5xWcZ9eBwz3JhUF2iNbiNH0-s12SNK3N8gSTziRtf0VOJhzr49ai1KOFptJWLPFmXMaJLVkzExe6Ft5bx7q0X-dBtvUi-1OArZ7nCL7BDb9YIY9wDjhrhXfStzT694kJReSbBwSgR2LMaWWJEN11HbuMGZR_0MmrpHXy58G-hhg0kEV68R4m-BbEzm3OZGYyC_YlmZ6n8bKVDziYGMcIJxWK5uy1hB71BIHhZks7p83m7zkunoRzxwUZokxO9AsmZLWqxlt3d01MO59Mane-jtP7LV07DioRy6DkaRPJVGpXzQrLJmpu9kHg7iH2X7_I57UHNUy-6M9SxJlBoY0iRJ6EC75dWRTooM1kMhdAjS741s_qAHOx95EX6kE8dKbHQFyxFAgDzsOadYKR0NlN5ONs7PDG0hxhSAK0rfovl2_KhiVypeOzgfbLl6tialwxaoHYrybDY8v4g6uAqnUggoBxf-gcrHoj8kkln0Sw5Lv_E_J2s0ldeQ0QBJxVGFzbM1VR5iSBnmH2cBjnwTFrajVcz8GIfRSC-0WMNYuYvdwfdueZj3dly7jH1aLvZ_eEVQ6Z74GEtqlGrVJsiOaV8JQGs60Ip9fGwctT_0hvH5U_tW2czZ7zYhzg9y-sZsWiKNI2z6kQuq3RTLAS-C6UE-7BjCstbfR1Iq=w935-h701-no',
        color: '#8f02db',
        location: '8 Spruce St, NYC'
      },
      {
        id: 'all-my-stuff-for-the-year',
        date: '2017-10-30',
        title: 'A year of Garrett\'s stuff',
        type: 'image',
        body: 'https://lh3.googleusercontent.com/x2v5uj4lstpdm4xaqxa8Jlr7j4E3A3AB6VCErpPBaQr7YQVZuBZYunGYV9shRfzRWvzHbTnzCO0i-tqnkQGgj8R8TSpOrIyUs4zBd6496yHgt2z0ugrF0qQB944-VqWQsr2LRGZQ3Hs-QSQ8tE04FrRXnp_a3cAQHy-16k4CBUuw5unVLmjFGy59KE9iwvr2PSM0aqxxi3xC1mX_ZCPKJQHt8ClArOunSl08_XbPG1q7yeDtWeCwcy6R3SsIU4EyXOimWvP9Q_u9u_qYbu4D6y1mSzhsWI6-jl3pNIa2EZ67pof-YeZ2OoiQ3zpc4mrfur-S7FBgpWjXitmh3Tuj89kbiWoE8BlQxZe02uFKvMCCXC8vz9TBOHfIdDHpFaq9cNjmlrIiL9AzPOWB_-gLce4zbdwDg45HamF-vY4y0QYtoW63iuqO8DqNkfgJnwgm6TE74jYl0u_D8NUP-aRbFCKdi-mtGlbJD_GMx_vEsqJdWpQppk89kkD7F-v6xmIea5WcgxgeGH-H3UPfxvKoxNXUb1ReOhDO0pEet_QksDeimF01eGOgt8QAXyAHwuwPBMFSIlUgLJ8hYSy7jkkYroD6fVrr_FLf97StklO_aqXiL47woi4zLOtx1laiol6RFNGitYFMfOYmgy-CK445RUd8bz5iWH5GvMn6=w526-h701-no',
        background: 'https://lh3.googleusercontent.com/Vwv75vvMs12Cf5YioMBBKhLnm1av_y3G_I7_9JnEPzRU_wsWvNmj-9cbwGz-DFgESJz3NCo8M0IF-VQ2btnLgr_lrUH9UBEk8qLYrSmIvVjwyLBwMgRGzZYlyKls06bBTu-Z4jtK2nrmfUJXm2BNYc2-fy5JNuuIK1olxCJmjwINbSygIk3beIPbcVtObF5gm-Rk7jbJFZ_xgZP4bHK95aGWK9478YChw0aCUgUz7iC2wAb96LOy_w9ZK2QXXrmY8xlHTjh3HGCMDvRozodux7HVsJ1m6vnoldrlNMFO_9YkdeO8Hwkk-0Kn9Xvi_W0_qTqdA7gRa7CDuuk3p52A_SQ7hVl7T0aAhM0WuXSveBZ-7GUR69TnlBD6CLuEBCkJT9n7mRWkMtvv08O7JeGotojVk0nStbx44EU4n0UptoXigGocwuPwaFHaiRVZk6OvvnmXYEE4j4u63P7hmT_-pB-vfgP9kHFAgYUWw-M2hlsavX1IXUEYcmC-o0NVp7-QTMOk_FGcu6N9jS7FKcoN0SP81vodKphNN2WbAC2erIHpxol04q1nngTDvUAdofxJV7bxGKZ9L-BH6OiE2VaxPcGXWaOvtFgr6JuAd7gLoSY=w935-h701-no',
        color: '#08a317',
        location: '8 Spruce St, NYC'
      },
      {
        id: 'last-meal-in-nyc',
        date: '2017-10-31',
        title: 'Last meal in NYC',
        type: 'video',
        body: 'https://www.dropbox.com/s/hhllaaz9anpwdns/VID_20171031_195031.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/YfZQ1SnaHcO3ySUhlendga2C3i7YQRj1Rah-4QkjCd_DwJIHSKiJIK-qffUWaa93tbTEsQ7DSdVo7n9FSRIYmqKr_6yQMRgRD8o3wr0OLpwhJ7NXmYeXBrAonDv0xqwOmFljFuHFJg-o0z0nzM9RllHB7_YZWAxHD-MWPTezTDGyFlwpO2626_wS9S_KMCV7HnPqkUnKSeHwy32HfcAWire0yGc5NS6d6Z8M2mqgq-Cfx_pN4gDUNtzuyF5NcovPqncfxUPvgSgZQ9BIgFcgmvooKRCPXU3b9kyxWtl-kf6gRqi9Ujhwr9CfmamgjTT5uAsiJ5R75w6ldgK7e-KT4d4eVsWPqhn-17hP7OOYAG0N_YcHNHXm3ggUUN1XbmXPqkHfwAZyx22aFAP7z90g5GX7MuM7u3f2d-afhPzS_eUfTHXXqVfL3p2R8oq1rGoHKZyqSvbl17BhV31AmgiEPWM7ZO51XNQH4f1_Xz-tR4AWVjHKq0Rq83d2cEWt4zCawVVxGe91IYEW6r0hfYYWcI7JpO_McH1o0jEO6wLKOLANgBhafDhONfm_-0ARWFC-O8yaSTZ64P1UHoSBohH4H7R3ASeO_slJ0KWrO0yMSlo=w935-h701-no',
        color: '#f4df42',
        location: 'Secchu Yokota, NYC'
      },
      {
        id: 'landing-in-chicago-first',
        date: '2017-11-01',
        title: 'First destination: Chicago',
        type: 'video',
        body: 'https://www.dropbox.com/s/zcegyi0gj82oo5l/VID_20171101_193814.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/WDOiH6BggvqcbYeBt9KafZtNg1TvLb_DZ3cxQfQlPTrGNbSZJE8Aj2GEszWvgOd876usYsr1bKJ9fO3ccsgeKUVSxEVNyTK38BVqpTDvZEfArj22PorXvflMs-T3lwHJg52eXn-dOnmnZM8KIBTteMTrcjoog03yoA0N0n09uj4u66dm1Z0OiPVp4RLnABxqLPKJqaztE2QWTNsxUSr343v2-vY7MJOWJwjLS4liysHYuy61ZP2zE7keVVDq3EIlhhs4v6jRAX8iJSYvCtm_hxB6lsCUCZO_KbPeLFb7BY1sJ3vLt7aOIE9gf31b87TTdIi_fCfd9igIsb8tA2S2BGhILi5GgEbwI3lUF3V36M87i3fXRxyHSN4ysnihzykRIg29I6qwcQ-bLZBxBCOqUnWRod6mOYbtKy8VItAaaRFLcX98XFbKC8mumpTSbUgfxs1V0RV_PNk7VFgH3nn0OPqYePlALNHfMG2dJfueawJVD4ExtUZ4c6hXh-1PIqy49AsNjt2irI2c99xge_jMumFGIPkWP3WgAZmHoEY5LEJ5SMs7chQ1d-gMmqLShwhnO8TC7fZWwDnC-UZS8_MHAWal953rOL-GMtVeJ2LyG6c=w935-h701-no',
        color: '#d30000',
        location: 'ORD'
      },
      {
        id: 'suburban-planning-day',
        date: '2017-11-03 1:00',
        title: 'Glencoe suburb day',
        type: 'video',
        body: 'https://www.dropbox.com/s/d8ix5wy1befx8vw/VID_20171103_131353.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/TfUZzNx3Oo9w5EMXZrFTBRCijZ5D8bCvoatBtOlvfR18h8KAMetuA3xOxj1B3xidpfHJxReo4yh8n0DLJeY65WztbWCvfpyqlr6ZL4-ifExZ6rQEFr358CjyeWJ6tpoEC5l2ROvpY-GBN3gHBc0dWQOkozh1OrNXzrIQyvGYA-iuIXIyCy93GNB9A5-KOBeplsYP-54-PLo1oC6GUFS-KHrGSpVe-UGOqKN2mBpr5K50LT7EKKEJgwiLI_QN93-OtfTpn9-Zs_id4ESGr7xpGK1lgT2W01bCwihey6ZzccSkt7PPlSKqCpUHanAMeXLqwSEO1OHwIKda3cpo7R-3xxBOFFSqupnfMqZEoko95nr7U8V3_H5STtAy5_7H1TFdckDwbf_Ei_cvg6iYU_l9Sz4Fe_euaKe7KXVi379wta0Xx_J-j8yqBPO4YjaqFyfQSP5lvMbyzGnm0Wn2pEwe8B33oXZADHfEr_35QhCrxGYeYd3-UxbSu6LbAPe8QbPVkiqhDOSA3LdQ64wrDJ3kwYiyuE8W9W0EmyB4qr7zoJStAL6yAKodi4ebV-gbjxtr24kB78AI16a5V8wqOwZmgh28I8EgcM3dxDDjQtAOJYY=w935-h701-no',
        color: '#1ec99e',
        location: 'Glencoe, IL'
      },
      {
        id: 'finally-planning-first-leg',
        date: '2017-11-03 23:00',
        title: 'Starting to plan',
        type: 'text',
        body: `We're finally starting to plan out our trip. Staying at home makes it tough to be productive, so we spent the day in a local cafe (The Grind Cafe, Glenview). After we head to Seattle Nov 8-17, we'll be back in Chicago for Thanksgiving weekend. The weekend after Thanksgiving, Dec 1, we'll be in Austin with Jenster and Goomz. Then a quick stop in LA on the way to Hawaii to relax for a bit and check out more wedding venues. Finally, Taiwan for the second half of december.`,
        background: 'https://lh3.googleusercontent.com/TfUZzNx3Oo9w5EMXZrFTBRCijZ5D8bCvoatBtOlvfR18h8KAMetuA3xOxj1B3xidpfHJxReo4yh8n0DLJeY65WztbWCvfpyqlr6ZL4-ifExZ6rQEFr358CjyeWJ6tpoEC5l2ROvpY-GBN3gHBc0dWQOkozh1OrNXzrIQyvGYA-iuIXIyCy93GNB9A5-KOBeplsYP-54-PLo1oC6GUFS-KHrGSpVe-UGOqKN2mBpr5K50LT7EKKEJgwiLI_QN93-OtfTpn9-Zs_id4ESGr7xpGK1lgT2W01bCwihey6ZzccSkt7PPlSKqCpUHanAMeXLqwSEO1OHwIKda3cpo7R-3xxBOFFSqupnfMqZEoko95nr7U8V3_H5STtAy5_7H1TFdckDwbf_Ei_cvg6iYU_l9Sz4Fe_euaKe7KXVi379wta0Xx_J-j8yqBPO4YjaqFyfQSP5lvMbyzGnm0Wn2pEwe8B33oXZADHfEr_35QhCrxGYeYd3-UxbSu6LbAPe8QbPVkiqhDOSA3LdQ64wrDJ3kwYiyuE8W9W0EmyB4qr7zoJStAL6yAKodi4ebV-gbjxtr24kB78AI16a5V8wqOwZmgh28I8EgcM3dxDDjQtAOJYY=w935-h701-no',
        color: '#1ec99e',
        location: 'The Grind Cafe, Glenview, IL'
      }
    ])
  })
}

export default {
  loadPosts
}
