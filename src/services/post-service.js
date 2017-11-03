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
        color: '#42c8f4'
      },
      {
        id: 'moving-out-mess',
        date: '2017-10-26',
        title: 'Moving out',
        type: 'text',
        body: `Progress is slow, but we're on track`,
        background: 'https://lh3.googleusercontent.com/EjQLLtKi1XGa5wpvkSQswjOuOlT4JgK5n63jm5lD_KElj4zWgVM0kAw264BVeOyC2jeovlZOpFMLIIqAfXznhP8DMrWgVgwYZ9iDGSUmLTBofAjrGKuI2TlgYPF6uXKMZFrV5hmmqh0=w740-h555-no',
        color: '#f44186'
      },
      {
        id: 'moving-the-futon',
        date: '2017-10-28',
        title: 'Getting rid of furniture',
        type: 'image',
        body: 'https://lh3.googleusercontent.com/PuCBUE3ta-8Dq8u6PQaKC7VHFR5tf1Fz04XjbWZaF3OucdBTeLG_CBFubuQeBhEaFnDup1jXMsAe73orLkK0K7_0qGW2JrpKsqBwpGUtmXs3CgpKRZhFlRgJacPoLihgAIhOgl7Yfb5XajJ-pnyEiqoUo4IYjAr1CXeE5zv-T-DShtVdkacXaES-K-QJhXxQRGSy3hDn8ZTYFQ_7TugLINE503xjWrTsjVZUXM87HqKgyzMYUSZY8GklAvADawFp19UUhzcqdzyLqA39t8PlJTDXmLvIJdTmU46IentxEk_Gyo2w9YQLl4MOOB46jlCCFnVLDRGrMwz9n1BtgT7I_ZihU4gFGP2ksoMGikrYqRbx7Gz183XExYfa8Mk4LAy4Rgxh8rZJj5ET-OwOijPCrAK39rXbAH1mNWzG2kBab6Fb7kI82OgYPlgnr1zJ9nERxVL8erpEyFFsz3A2wRBiDiAHUGSHozIA5x2YLj2ZV7xF4IBZ3S3mir2mYoF0BXMPGdWMu_g6GK0tCSI0b5RDYjtUnm17_OXfKN1900wzH7KqrqfZLgKgKF8GnxgPSbTWUxM2Sy9-33OGvQlvCK4WTExRUe1FHyAETF1h19-dxnU=w526-h701-no',
        background: 'https://lh3.googleusercontent.com/Eg_4IIjOEQi0X7cZg1JIxaXkUiEBoFMAdFFIhgYCJcwTQwj3AieKw6sOqIIdCqWXp9kyOk2sSJpVWOOWsYr7hQpPQyDTxm-Zkk28J4yupQsA7eYKzWruPQoUofV8woDuxyMqqI47ch4gmcpn5rSeEP1vb1FfiqWR1oI4ZKhCgH9u3aZGOejFJAgGHVSf_D_pKC00Jn11B8q7MW30lx1seHLY4Ip-cOyr9JXc7RsH3vFz7qcCFiUHJ1lwQ10dVHBw9CgSxgVVJ9JP9cKSC-5HB_XVa0A7-iv9FiNStUqHvCRNwJo5RdqIvKyl_Btg0qwWAPn_4N1_d2M2gVITqwjZm7pRugivl0SDpnWkdgvVqy89NOGt-xGla3XU_zD-OlyB2fyTWgBIp5rZSObbweUxs35jaHHRkWFGMEsaTVcEzoTsPEabpBzXY6WOvxK-KQ3ncEtcRdnz4_mTxWC_snsv0pKgWvEh5YTLXY94JV81A442mssIh2yfBrM-T422lJxB01vSkQyCRYkC9ak-tpnHo66FK6ALZFfTRaSQaCuL8ZZ3tJLs-VXWij3vA80ekPyeJ92ECv5yXBa71OlbjXclqIMYi-hIsRfcl4qHhNe37QE=w935-h701-no',
        color: '#8f02db'
      },
      {
        id: 'all-my-stuff-for-the-year',
        date: '2017-10-30',
        title: 'A year of Garrett\'s stuff',
        type: 'image',
        body: 'https://lh3.googleusercontent.com/g58WB7wsOZfzNN6DPeBs7IrKe8zDLfWfzogAXaztwaJmk-6dnp1wZ189t0IqLMvHAd-v8HThqksP_JlSeNJuGBLdnYImYPMSOD219KW47SNgEgwMPbiRa1Zj6oxkx8-RJpflQAIiIWSzbu4MHc_kX3bR1m8zas0orZ9vjOlNEejx4fcNSp0YbZ3cYjsc5c-lN5nQQ8_rm_kp4VvQ3C8ca7pBJ6vzCnhra3ilmDs4xlQKeJiN5R4UpHZaHGZG6eJxJ5wFetdV3_vjfVn9fx8sdKOpvxKL-YvBT6W0GIoyl7__UnEEYU6JFUFh2hhuff7-rnseOSJ-E6_h6iagCzOEjwBfYjf5gtFIZ6sHmNfXCXUs8rQLNDJdbyaEVXtEwD77IL3lGw0NlXVgUeq2VMz-eKZ2xKbuq49SjalUmowY-kiWa2sS6tnKFrslr6xMa4qC9jRzblQ8aRAGMKRYiuivrBSMXbCOBxpJhCQwjOJBb42Bee_p0NpffzYbycqGa8uAYgSXNCAh5di5z5AhI-g2AUSodMB5GAIiLLyzFg-6j7jp2cFuMhOu1TWVRoB_eotRabCig30eZxqKVV32XrXUe8iBxLaoq70JvWqXB6CZQsA=w526-h701-no',
        background: 'https://lh3.googleusercontent.com/Vwv75vvMs12Cf5YioMBBKhLnm1av_y3G_I7_9JnEPzRU_wsWvNmj-9cbwGz-DFgESJz3NCo8M0IF-VQ2btnLgr_lrUH9UBEk8qLYrSmIvVjwyLBwMgRGzZYlyKls06bBTu-Z4jtK2nrmfUJXm2BNYc2-fy5JNuuIK1olxCJmjwINbSygIk3beIPbcVtObF5gm-Rk7jbJFZ_xgZP4bHK95aGWK9478YChw0aCUgUz7iC2wAb96LOy_w9ZK2QXXrmY8xlHTjh3HGCMDvRozodux7HVsJ1m6vnoldrlNMFO_9YkdeO8Hwkk-0Kn9Xvi_W0_qTqdA7gRa7CDuuk3p52A_SQ7hVl7T0aAhM0WuXSveBZ-7GUR69TnlBD6CLuEBCkJT9n7mRWkMtvv08O7JeGotojVk0nStbx44EU4n0UptoXigGocwuPwaFHaiRVZk6OvvnmXYEE4j4u63P7hmT_-pB-vfgP9kHFAgYUWw-M2hlsavX1IXUEYcmC-o0NVp7-QTMOk_FGcu6N9jS7FKcoN0SP81vodKphNN2WbAC2erIHpxol04q1nngTDvUAdofxJV7bxGKZ9L-BH6OiE2VaxPcGXWaOvtFgr6JuAd7gLoSY=w935-h701-no',
        color: '#08a317'
      },
      {
        id: 'last-meal-in-nyc',
        date: '2017-10-31',
        title: 'Last meal in NYC',
        type: 'video',
        body: 'https://www.dropbox.com/s/hhllaaz9anpwdns/VID_20171031_195031.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/YfZQ1SnaHcO3ySUhlendga2C3i7YQRj1Rah-4QkjCd_DwJIHSKiJIK-qffUWaa93tbTEsQ7DSdVo7n9FSRIYmqKr_6yQMRgRD8o3wr0OLpwhJ7NXmYeXBrAonDv0xqwOmFljFuHFJg-o0z0nzM9RllHB7_YZWAxHD-MWPTezTDGyFlwpO2626_wS9S_KMCV7HnPqkUnKSeHwy32HfcAWire0yGc5NS6d6Z8M2mqgq-Cfx_pN4gDUNtzuyF5NcovPqncfxUPvgSgZQ9BIgFcgmvooKRCPXU3b9kyxWtl-kf6gRqi9Ujhwr9CfmamgjTT5uAsiJ5R75w6ldgK7e-KT4d4eVsWPqhn-17hP7OOYAG0N_YcHNHXm3ggUUN1XbmXPqkHfwAZyx22aFAP7z90g5GX7MuM7u3f2d-afhPzS_eUfTHXXqVfL3p2R8oq1rGoHKZyqSvbl17BhV31AmgiEPWM7ZO51XNQH4f1_Xz-tR4AWVjHKq0Rq83d2cEWt4zCawVVxGe91IYEW6r0hfYYWcI7JpO_McH1o0jEO6wLKOLANgBhafDhONfm_-0ARWFC-O8yaSTZ64P1UHoSBohH4H7R3ASeO_slJ0KWrO0yMSlo=w935-h701-no',
        color: '#f4df42'
      },
      {
        id: 'landing-in-chicago-first',
        date: '2017-11-01',
        title: 'First destination: Chicago',
        type: 'video',
        body: 'https://www.dropbox.com/s/zcegyi0gj82oo5l/VID_20171101_193814.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/WDOiH6BggvqcbYeBt9KafZtNg1TvLb_DZ3cxQfQlPTrGNbSZJE8Aj2GEszWvgOd876usYsr1bKJ9fO3ccsgeKUVSxEVNyTK38BVqpTDvZEfArj22PorXvflMs-T3lwHJg52eXn-dOnmnZM8KIBTteMTrcjoog03yoA0N0n09uj4u66dm1Z0OiPVp4RLnABxqLPKJqaztE2QWTNsxUSr343v2-vY7MJOWJwjLS4liysHYuy61ZP2zE7keVVDq3EIlhhs4v6jRAX8iJSYvCtm_hxB6lsCUCZO_KbPeLFb7BY1sJ3vLt7aOIE9gf31b87TTdIi_fCfd9igIsb8tA2S2BGhILi5GgEbwI3lUF3V36M87i3fXRxyHSN4ysnihzykRIg29I6qwcQ-bLZBxBCOqUnWRod6mOYbtKy8VItAaaRFLcX98XFbKC8mumpTSbUgfxs1V0RV_PNk7VFgH3nn0OPqYePlALNHfMG2dJfueawJVD4ExtUZ4c6hXh-1PIqy49AsNjt2irI2c99xge_jMumFGIPkWP3WgAZmHoEY5LEJ5SMs7chQ1d-gMmqLShwhnO8TC7fZWwDnC-UZS8_MHAWal953rOL-GMtVeJ2LyG6c=w935-h701-no',
        color: '#d30000'
      },
      {
        id: 'suburban-planning-day',
        date: '2017-11-03 1:00',
        title: 'Glencoe suburb day',
        type: 'video',
        body: 'https://www.dropbox.com/s/d8ix5wy1befx8vw/VID_20171103_131353.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/TfUZzNx3Oo9w5EMXZrFTBRCijZ5D8bCvoatBtOlvfR18h8KAMetuA3xOxj1B3xidpfHJxReo4yh8n0DLJeY65WztbWCvfpyqlr6ZL4-ifExZ6rQEFr358CjyeWJ6tpoEC5l2ROvpY-GBN3gHBc0dWQOkozh1OrNXzrIQyvGYA-iuIXIyCy93GNB9A5-KOBeplsYP-54-PLo1oC6GUFS-KHrGSpVe-UGOqKN2mBpr5K50LT7EKKEJgwiLI_QN93-OtfTpn9-Zs_id4ESGr7xpGK1lgT2W01bCwihey6ZzccSkt7PPlSKqCpUHanAMeXLqwSEO1OHwIKda3cpo7R-3xxBOFFSqupnfMqZEoko95nr7U8V3_H5STtAy5_7H1TFdckDwbf_Ei_cvg6iYU_l9Sz4Fe_euaKe7KXVi379wta0Xx_J-j8yqBPO4YjaqFyfQSP5lvMbyzGnm0Wn2pEwe8B33oXZADHfEr_35QhCrxGYeYd3-UxbSu6LbAPe8QbPVkiqhDOSA3LdQ64wrDJ3kwYiyuE8W9W0EmyB4qr7zoJStAL6yAKodi4ebV-gbjxtr24kB78AI16a5V8wqOwZmgh28I8EgcM3dxDDjQtAOJYY=w935-h701-no',
        color: '#1ec99e'
      },
      {
        id: 'finally-planning-first-leg',
        date: '2017-11-03 23:00',
        title: 'Starting to plan',
        type: 'text',
        body: `We're finally starting to plan out our trip. Staying at home makes it tough to be productive, so we spent the day in a local cafe (The Grind Cafe, Glenview). After we head to Seattle Nov 8-17, we'll be back in Chicago for Thanksgiving weekend. The weekend after Thanksgiving, Dec 1, we'll be in Austin with Jenster and Goomz. Then a quick stop in LA on the way to Hawaii to relax for a bit and check out more wedding venues. Finally, Taiwan for the second half of december.`,
        background: 'https://lh3.googleusercontent.com/TfUZzNx3Oo9w5EMXZrFTBRCijZ5D8bCvoatBtOlvfR18h8KAMetuA3xOxj1B3xidpfHJxReo4yh8n0DLJeY65WztbWCvfpyqlr6ZL4-ifExZ6rQEFr358CjyeWJ6tpoEC5l2ROvpY-GBN3gHBc0dWQOkozh1OrNXzrIQyvGYA-iuIXIyCy93GNB9A5-KOBeplsYP-54-PLo1oC6GUFS-KHrGSpVe-UGOqKN2mBpr5K50LT7EKKEJgwiLI_QN93-OtfTpn9-Zs_id4ESGr7xpGK1lgT2W01bCwihey6ZzccSkt7PPlSKqCpUHanAMeXLqwSEO1OHwIKda3cpo7R-3xxBOFFSqupnfMqZEoko95nr7U8V3_H5STtAy5_7H1TFdckDwbf_Ei_cvg6iYU_l9Sz4Fe_euaKe7KXVi379wta0Xx_J-j8yqBPO4YjaqFyfQSP5lvMbyzGnm0Wn2pEwe8B33oXZADHfEr_35QhCrxGYeYd3-UxbSu6LbAPe8QbPVkiqhDOSA3LdQ64wrDJ3kwYiyuE8W9W0EmyB4qr7zoJStAL6yAKodi4ebV-gbjxtr24kB78AI16a5V8wqOwZmgh28I8EgcM3dxDDjQtAOJYY=w935-h701-no',
        color: '#1ec99e'
      }
    ])
  })
}

export default {
  loadPosts
}
