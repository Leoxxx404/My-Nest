import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://pic2.zhimg.com/v2-fb7b7d5bf36b310b690fc9100725025b_b.jpg",
        siteTitle: "佳佳的小窝",
        github: "https://github.com/JY-China",
        qq: "930678403",
        qqQrCode: "https://pic2.zhimg.com/v2-8d9058c4b8bf393634cf5c7b7a8b3dd5_b.png",
        weixin: "axiba0309",
        weixinQrCode: "https://pic3.zhimg.com/v2-1133ca1c32f1678480effeb0a154dee6_b.png",
        mail: "Lion_GG@q126.com",
        icp: "黑ICP备17001719号",
        githubName: "JY-China",
        favicon: "https://pic2.zhimg.com/v2-fb7b7d5bf36b310b690fc9100725025b_b.jpg",
    },
});