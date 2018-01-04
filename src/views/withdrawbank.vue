<template>
    <div class="app-container">
        <section class="withdraw-wrapper">
            <div class="title">银行卡</div>
            <div class="bank-wrapper">
                <mt-cell title="招商银行" label="尾号 2356" is-link to="/bankDetail/1">
                    <img slot="icon" src="/static/bank/zhaohang.png">
                </mt-cell>
            </div>
            <div class="title">提现金额</div>
            <div class="input-wrapper">
                <mt-field placeholder=""></mt-field>
            </div>
            <div class="last-wrapper">
                <mt-cell title="可提现 15232.0"><mt-button type="primary" @click.native="" class="button-link">全部提现</mt-button>
                </mt-cell>
            </div>
            <div class="wd100">
              <mt-button type="primary" @click.native="" class="btn-ensure">确认提现</mt-button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            linkToSucc: function () {
                this.$router.push({path: '/withdrawSucc'});
            }
        }
    }
</script>
<style  lang="sass?outputStyle=expanded">
    .withdraw-wrapper {
        padding:0.75rem;
        .title{
            margin: 1rem 0 0.5rem 0;
            font-size: 0.6rem;
            color: #666;
        }
        .bank-wrapper{
            .mint-cell{
                 background: #fd938c;
                 border-radius: 5px;
                 padding: 1.75rem 1.2rem 2rem 1.05rem;
                .mint-cell-wrapper {
                    background:none;
                    .mint-cell-title {
                        position: relative;
                        height: 100px;
                        padding: 0 3.6rem;
                        overflow: hidden;
                    }
                    img {
                        position: absolute;
                        z-index: 3;
                        top: 0rem;
                        left: 0;
                        width: 100px;
                        height: 100px;
                    }

                    .mint-cell-text {
                        display: block;
                        font-size: 0.75rem;
                        line-height: 1.05rem;
                        color: #fff;
                    }

                    .mint-cell-label {
                        display: block;
                        margin-top: 0.125rem;
                        font-size: 0.75rem;
                        line-height: 1.05rem;
                        color: #fff;
                    }

                }

                .mint-cell-allow-right{
                    &:after{
                         border-color:#fff;
                     }
                }
            }
        }

    }
    .mint-cell-wrapper {
        background: none;
        padding: 0;
    }
    .input-wrapper{
        .mint-cell-wrapper {
            background: #f2f2f2;
            border:1px solid #e4e4e4;
            border-radius: 2px;
            padding: 0 10px;
        }
    }
    .last-wrapper{
        padding: 1rem 0px 1.75rem 0;
        .mint-cell {
            background: none;
        }
        .mint-cell-title{
            color: #666;
            font-size: 0.6rem;
        }
        .button-link{
            color: #a1c4fd;
        }
    }
    .wd100{
        .mint-button{
            width: 100%;
        }
    }

    .btn-ensure {
        margin: 1.6rem auto 1rem;
    }
</style>