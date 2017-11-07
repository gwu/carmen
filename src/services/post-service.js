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
        background: 'https://lh3.googleusercontent.com/eloMnYva3ckcsD_HeCStfSAWxTTxwwNHsGACCjTbA_TUud_3yDaI0FSOEKFBe71w9dgu5KV2x381Tqw6FDxAa11W8-vLsR-QLNnO0Dtgvk9DTMAaITuW2EOTIg4G3QPCZkfVtfW9emWkthBcsem1bvN56srhlSDnwXOYp5iDLxeRu8O7P2uC1hHyMpgfQP04E_G1c-0SDA7XPAvp0Brm3VRwKxvHj9qK7Ds_xA04f3Wrk8P1U13iufPe7xsBwz4zumcPG9acgugh86D7KSoqItUY9iPfzwVBM2nvMU8HSl4tpAwbb9hKhtxLoq8-iERZfzhrN1RcKVM2JV69YXjp8Jpchy_AO-0qdcxUcBAz4cL9EaNZI1yrxEZSKjDSNtlw3IduFJKyqkdu7x96FeEX9kRowGAy1Cr0j-0Ykr9flsqHZSSpwrHdOhwPeXTLD60OLm7W6j-NAFhedML74gW1NbZuu5rKJINTD470bRxp92WsUSbmQr1kwljhHD4a2nfVsMXTtNIQ0zBzX21xtiaCizWVRihpJmEAKFxax47iJYQobA5kw3I4zPrS4RRMejB-9GPlWsj9o9o1a7OhObOJLlN8INgZykhiJYQnU0rAkF2HCtjyD0juud5ub7h9t__6oTRqBlT7ibe4sm_ZNlwvSIM4UTYpVu0cU0bZ=w935-h701-no',
        color: '#08a317',
        location: '8 Spruce St, NYC'
      },
      {
        id: 'last-meal-in-nyc',
        date: '2017-10-31',
        title: 'Last meal in NYC',
        type: 'video',
        body: 'https://www.dropbox.com/s/hhllaaz9anpwdns/VID_20171031_195031.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/HcsFvvh1wYo9qO8QrjCMcS_Edo44o_X5Tkbe6f0qMxOxjSmYsrmVpFLXOGZtbZbsNIzR9byhc6RW-vpFesgbF4INIeb4PnRAGu9pDFxmpzN0dkWTTtFHGK5gMcJ8Ss9d5nfeHO5wSKSfvmYA2kSPFBUXBQjQbqibgVmPxNXLO2mkJvTdSdGcpoRfGuM8iYAC9hxwCMc-c8LLufjueIbOeEqymUROnt_vW5DQdRbaBFsxuqMcm3A-RcUXkeIyuTe6VSJBXdUTZFgFW2fBdo9B2g2njK3IYgu7gaVimje8OQyfg1RsvfEUJZy3osD-cIJA1ivFSiyQtDBizUgMMqmmJzeKPztwjQBpck-8COTXacecpZI6EP5mfWAoAf6VNG0GGgWqv7sQymD5L320DJj2dqaMXz6XXm8gNBfdlPz7fnKU4FHjGCnwmgZRap3tdwr63nqBJD9IojAaU4Iu9PmlWmqhm_nUlFQ-HuL10Vg_JWZNAsgBQaVjklSpAZP1oAf3acvotQX7BJsLG4iV7b5LVSrS0i8wj5eCZAp20-uwnfB5jRXjjwpX4bWalP39qxyw_Hy6TQ=s935-w935-h701-no',
        color: '#f4df42',
        location: 'Secchu Yokota, NYC'
      },
      {
        id: 'landing-in-chicago-first',
        date: '2017-11-01',
        title: 'First destination: Chicago',
        type: 'video',
        body: 'https://www.dropbox.com/s/zcegyi0gj82oo5l/VID_20171101_193814.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/uIi9YAQRIHtz3nX6690sYAHcSAd3ZfJa58Yrf8gShGpxqfGwA2YICQ-Et9ImZv4RJEbV3Kxg2HVQIXLksD4HbyILsiCqq2Clmh5fi1zLHmdbYVASD_R8qUvlPvs1qzUwmey_BT6JxNAPw2eBpFHNT9--vkRmUKN2tRQ66A6Usc6wX0m0Z0P3ae8ITc1R_94_b5He4NKQLrgBWbXoK0aWa8U9rSDWqH0lnYB9TZB5pMak9uvfHExU1zAG79_xO0ghod7yaOK4uPq2OWCG_whqjU__Xlk0Qmo_-pbVRI4JpW4WD6PKlHPvLXkineJfwL0e-ZchOMnMoncSJu4QAfUSUq_sGDpsnIReABYHh1bOfbC2JWLSGHjVwYLAdMwIj8bDmKMSkvUGEO_pYR6SY_rXyu6RLVpp1EnlcXBDKSNrHeRlJeHTAuPEnzzRYM0DZOYvqXwWElK7tEO4HbsAGR4OLQrU_NaTN5gBAz-kXZaWQhn5QVfpmori94MLU9Wj2AEADvmZ1YDbpWJ5Kb5aiThJByO-bBpnlQdGiOSllCESAysJva867iGqUgWQDwB45R_scMQ=s935-w935-h701-no',
        color: '#d30000',
        location: 'ORD'
      },
      {
        id: 'suburban-planning-day',
        date: '2017-11-03 1:00',
        title: 'Glencoe suburb day',
        type: 'video',
        body: 'https://www.dropbox.com/s/d8ix5wy1befx8vw/VID_20171103_131353.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/gzbpNx3OFYbRZfxGBs5KFTXqFXlOpUbmduFvzvDDS-86iVOUnOhJOakVMYgTWRJsIBNtQdyBj4qzEKEtlJUOqEvtEut9yQYnp2FFNDRvMCA6IM5J-sFW3KKtgEuVMcSGOrKp1ynapyth-IkHca2ajRF5nXZN_ZYlq4R_UpU05_iKaQJW6VamGIC7cmTbPrAriOlM_SWBh0AhVHwRMWd1beKl-Xk4Q2gokz275QYgcWdQXeNRVH89-9FdfT6AHlZ2aCb9aW-nCK2ZZPp4RgPTbOXC1HcERRTW4UkM0ED6KyE17Cty1cxSb6b_TRvwC7BrHRx1TfCfy0LlaDvYQtFzIG2ONqXUTGvfkDB-Qm-3UX0B32nj_hHn-Ge-pJeXgYHA4M-5931Vepuhd2JBi5w18gQzaf0pODjp07tacJssncSCfRaE_ZufO9-SATB-J4JRQFcIVK3JcYSSUv8grmVJoG4YA0z60G9DseZrwVHUa9jWocLMhSpedXaValQNFUMznF0ogw2DMbbd9-Fpwp8ir_5hyRMAVElz4FBMndnvyRWJzKbNaTwF_QedWLB1hf1gcZa-JIUnhs8p1hYjN-B73ADsRDX4VgtN0jcrgPX6_UlrqNM6n7BpIG7Mnjxpg8YzSuscogYmqVRxaYomUIHIZiXBoK4RZAuCzSBq=w935-h701-no',
        color: '#1ec99e',
        location: 'Glencoe, IL'
      },
      {
        id: 'finally-planning-first-leg',
        date: '2017-11-03 23:00',
        title: 'Starting to plan',
        type: 'text',
        body: `We're finally starting to plan out our trip. Staying at home makes it tough to be productive, so we spent the day in a local cafe (The Grind Cafe, Glenview). After we head to Seattle Nov 8-17, we'll be back in Chicago for Thanksgiving weekend. The weekend after Thanksgiving, Dec 1, we'll be in Austin with Jenster and Goomz. Then a quick stop in LA on the way to Hawaii to relax for a bit and check out more wedding venues. Finally, Taiwan for the second half of december.`,
        background: 'https://lh3.googleusercontent.com/gzbpNx3OFYbRZfxGBs5KFTXqFXlOpUbmduFvzvDDS-86iVOUnOhJOakVMYgTWRJsIBNtQdyBj4qzEKEtlJUOqEvtEut9yQYnp2FFNDRvMCA6IM5J-sFW3KKtgEuVMcSGOrKp1ynapyth-IkHca2ajRF5nXZN_ZYlq4R_UpU05_iKaQJW6VamGIC7cmTbPrAriOlM_SWBh0AhVHwRMWd1beKl-Xk4Q2gokz275QYgcWdQXeNRVH89-9FdfT6AHlZ2aCb9aW-nCK2ZZPp4RgPTbOXC1HcERRTW4UkM0ED6KyE17Cty1cxSb6b_TRvwC7BrHRx1TfCfy0LlaDvYQtFzIG2ONqXUTGvfkDB-Qm-3UX0B32nj_hHn-Ge-pJeXgYHA4M-5931Vepuhd2JBi5w18gQzaf0pODjp07tacJssncSCfRaE_ZufO9-SATB-J4JRQFcIVK3JcYSSUv8grmVJoG4YA0z60G9DseZrwVHUa9jWocLMhSpedXaValQNFUMznF0ogw2DMbbd9-Fpwp8ir_5hyRMAVElz4FBMndnvyRWJzKbNaTwF_QedWLB1hf1gcZa-JIUnhs8p1hYjN-B73ADsRDX4VgtN0jcrgPX6_UlrqNM6n7BpIG7Mnjxpg8YzSuscogYmqVRxaYomUIHIZiXBoK4RZAuCzSBq=w935-h701-no',
        color: '#1ec99e',
        location: 'The Grind Cafe, Glenview, IL'
      },
      {
        id: 'd-and-b-with-kiwon',
        date: '2017-11-04 22:00',
        title: 'Suburban night out',
        type: 'video',
        body: 'https://www.dropbox.com/s/1vun5ot31lfom6t/VID_20171103_223127.mp4?dl=1',
        background: 'https://lh3.googleusercontent.com/p3Gdl8HHOanUCrgMGs2HPA3dgWcyvEK6PaiQzDtlOJEK_ML99NEuJQYGtMxDYiZDMkLQZfBaxlpxH25XYjLjtGFZ5uK5bHgcgrKneE36wxZWtCb1kT7yx1fgztg3hneeJgdJfMmXC3cXRDQD2StLg_WgK9e4fM5aRX5kcseVAyyGnWvc9DKTCDbpZRjzvExVvGuFqc5CwSGRnNfJ2Uu8eWWn0UKCLyO9NoUIWD2c0vamnAAB4lB1sZk39tCFrEogs3zgiR1d3Q5VovYsFQmvdHIQrcuvEbfhiD1DgavVSy2wf6EY_RQd5pA5nKRdzaQsIKTEDr2ftFR8g7GaMi6z9aKGkXqq62OcGUWhCt0TXEl8M4TXk4zIz1HYD7ONK-PTjKuBGXzkkzE5AC-dPeuRRJ71GEoPgdshE5d7psP-vRDkVA0UyE96TA7NFOZNtZ4PFNx_EDGyNXs-sGeF1a3T_9kHjtm1SqHAt-ivQo9qKz1aCgujyNYbUtpWjuXdKs7mOHWAqD_eyvffTK9XrjhMd7i8yxcpTZieSaQqzQK_noHS7RyDJeMIX0-WiwX5et4baw39XIMNKJ-tr5qiJ3K2la89zGcTdLhiS358Mhild9c=w935-h701-no',
        color: '#f442a4',
        location: 'Dave and Busters, Vernon Hill, IL'
      },
      {
        id: 'bob-chins',
        date: '2017-11-05 12:00',
        title: 'Bob Chinn\'s Crab House',
        type: 'image',
        body: 'https://lh3.googleusercontent.com/VJkSTLEnomo0k5lkCDWrVy89-t2hHBitdJf5S8UOpVs9YAkYAjEHzdUoQO-Ivh-yVeI-jsJAZWBud31s6aSCBgp15JJVSqu0dqiTf675VmCQppUZ-jikWEt-qS2q3Q61vj3pp0YiwcvEsYi8T89CFxZXipT9s_kZvXBYtMh7qfUExS1X-xIERlURXl4NwISliGRufHi3tn_lJioE7Oo8hz91fl2EATlJ5e_l_s105cgXbzljl0R7PAskcBIgRLj7PRB-1WF49r90YaCoARjleLxikgKlhdswIq2i2dQ6b9Zo8rnujC7BZUOCy6jhmGWpCAKYlE4bVnYPhfjWCLYT_rekELH_xvbCyBb8xDzdS57agFhqq1W-ng0st6lhC_1O-I5bM1WKIweJzIE-3ndIFlAhcdoV-r6ahXln0sP2_4ImlLJFZRLzcV46OC7nO6QjWPL4no4ok64E8Cab7vNBWtdoeg5Y6JBU3tZ60nfNa4XqBvp00zjVTex0HtFCLhjwQdo081DuiF0owsITVkrDQaIhxn-QCxbSu3fqX9_pcjGu4-GBtOHn6wI8FEwh3tw7MNQPS0ZrTmK5ghgkvmhM8RhYiNaSmKzRYXBMo1URTdU=w935-h701-no',
        background: 'https://lh3.googleusercontent.com/VJkSTLEnomo0k5lkCDWrVy89-t2hHBitdJf5S8UOpVs9YAkYAjEHzdUoQO-Ivh-yVeI-jsJAZWBud31s6aSCBgp15JJVSqu0dqiTf675VmCQppUZ-jikWEt-qS2q3Q61vj3pp0YiwcvEsYi8T89CFxZXipT9s_kZvXBYtMh7qfUExS1X-xIERlURXl4NwISliGRufHi3tn_lJioE7Oo8hz91fl2EATlJ5e_l_s105cgXbzljl0R7PAskcBIgRLj7PRB-1WF49r90YaCoARjleLxikgKlhdswIq2i2dQ6b9Zo8rnujC7BZUOCy6jhmGWpCAKYlE4bVnYPhfjWCLYT_rekELH_xvbCyBb8xDzdS57agFhqq1W-ng0st6lhC_1O-I5bM1WKIweJzIE-3ndIFlAhcdoV-r6ahXln0sP2_4ImlLJFZRLzcV46OC7nO6QjWPL4no4ok64E8Cab7vNBWtdoeg5Y6JBU3tZ60nfNa4XqBvp00zjVTex0HtFCLhjwQdo081DuiF0owsITVkrDQaIhxn-QCxbSu3fqX9_pcjGu4-GBtOHn6wI8FEwh3tw7MNQPS0ZrTmK5ghgkvmhM8RhYiNaSmKzRYXBMo1URTdU=w935-h701-no',
        color: '#ff9d00',
        location: 'Bob Chinns Crab House, Wheeling, IL'
      }
    ])
  })
}

export default {
  loadPosts
}
