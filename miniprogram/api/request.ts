const baseUrl: string = 'https://bert-music-1829325-1311237635.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) => {
    wx.showLoading({
        title: '加载中'
    })
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl + uri,
            method: 'GET',
            success:res=>resolve(res.data),
            fail:reject,
            complete:()=>{
                wx.hideLoading()
            }
        })
    })
  
}