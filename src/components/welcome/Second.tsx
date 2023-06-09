import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss"
import clock from "../../assets/clock.svg"
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Second = defineComponent({
    setup: () => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={clock} />,
                    title: () => <h2>每日提醒<br />不会遗漏每一笔账单</h2>,
                    buttons: () =>
                        <>
                            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                            <RouterLink to="/welcome/3">下一步</RouterLink>
                            <RouterLink to="/start">跳过</RouterLink>
                        </>

                }}
            </WelcomeLayout >
        )
    }
})
