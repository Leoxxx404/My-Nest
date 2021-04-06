import getComponentRootDom from "./getComponentsRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */

export default function (option = {}) {
    const content = option.content || "";
    const type = option.type || "info";
    const duration = option.duration || 2000;
    const container = option.container || document.body;

    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type
    });

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;

    if (option.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "realtive";
        }
    }

    container.appendChild(div);
    div.clientHeight; //重新渲染

    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;


    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50% , -50%) translateY(-25px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            option.callback && option.callback();

        }, {
            once: true
        })
    }, duration);

}