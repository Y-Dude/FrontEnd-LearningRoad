<template>
<div class="contact">
    <pcc-title flag="0" title-content="联系我们" />
    <pcc-img-and-text :infos="infos" />
</div>
</template>

<script>
import PccTitle from "~/components/utils/PccTitle";
import PccImgAndText from "~/components/utils/PccImgAndText";
export default {
    name: 'PccContact',
    head:{
        title:'Contact'
    },
    data: function () {
        return {
            infos: [{
                    imgUrl: '/ER-XRS网校语文三升四-3群.png',
                    content: 'XRS网校语文三升四-3群'
                },
                {
                    imgUrl: '/ER-网校语文四升五3群.png',
                    content: '网校语文四升五3群'
                },
                {
                    imgUrl: '/ER-网校语文五升六3群.png',
                    content: '网校语文五升六3群'
                },
            ]
        }
    },
    components: {
        PccTitle,
        PccImgAndText
    }
};
</script>

<style>
.contact ul li {
    width: 30%;
}

.contact .img-row span::before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    background-color: red;
    margin-right: 10px;
    display: inline-block;
}
</style>
