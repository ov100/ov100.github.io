(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(a,e,t){"use strict";t.r(e);var r=t(17),s=function(a){a.options.__data__block__={mermaid_382ee14d:"graph LR;  \n　　A[订单系统]--\x3e支付系统;\n　　A--\x3e物流系统;\n　　A--\x3e库存系统; \n　　\n",mermaid_382ee14e:"graph LR;  \n　　A[订单系统]--\x3eB[MQ]--\x3e支付系统;\n　　A--\x3eB--\x3e物流系统;\n　　A--\x3eB--\x3e库存系统; \n",mermaid_382ee16a:"graph LR;  \n　　用户--\x3e|每秒5k请求|A系统--\x3e|最大每秒200请求|db[(mysql)];\n",mermaid_382ee16b:"graph TB;  \n　  A[用户]--\x3e|每秒5k请求|B[MQ];\n   B--\x3e|每秒拉取200个请求|C[A系统];\n   C--\x3e|最大每秒200请求|D[(mysql)];\n   \n"}},n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"消息中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息中间件"}},[a._v("#")]),a._v(" 消息中间件")]),a._v(" "),t("h2",{attrs:{id:"什么是消息中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是消息中间件"}},[a._v("#")]),a._v(" 什么是消息中间件")]),a._v(" "),t("p",[a._v("其实并没有标准定义。一般认为，消息中间件属于分布式系统中一个子系统，关注于数据的发送和接收，利用高效可靠的异步消息传递机制对分布\n式系统中的其余各个子系统进行集成。\n高效:对于消息的处理处理速度快。 可靠:一般消息中间件都会有消息持久化机制和其他的机制确保消息不丢失。 异步:指发送完一个请求，不需要等待返回，随时可以再发送下一个请求，既不需要等待。 一句话总结，我们消息中间件不生产消息，只是消息的搬运工。")]),a._v(" "),t("h2",{attrs:{id:"为什么要用消息中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用消息中间件"}},[a._v("#")]),a._v(" 为什么要用消息中间件？")]),a._v(" "),t("h3",{attrs:{id:"应用解耦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用解耦"}},[a._v("#")]),a._v(" 应用解耦")]),a._v(" "),t("p",[a._v("系统的耦合性越高，容错性就越低。以电商应用为例，用户创建订单后，如果耦合调用库存系统、物流系统、支付系统，任何一个子系统出了故障或者 因为升级等原因暂时不可用，都会造成下单操作异常，影响用户使用体验\n使用消息中间件，系统的耦合性就会提高了。比如物流系统发生故障，需要几分钟才能来修复，在这段时间内，物流系统要处理的数据被缓存到消息队 列中，用户的下单操作正常完成。当物流系统恢复后，继续处理存放在消息队列中的订单消息即可，终端系统感知不到物流系统发生过几分钟故障。")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee14d",graph:a.$dataBlock.mermaid_382ee14d}}),t("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:a.$dataBlock.mermaid_382ee14e}}),t("h3",{attrs:{id:"流量削峰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰"}},[a._v("#")]),a._v(" 流量削峰")]),a._v(" "),t("p",[a._v("应用系统如果遇到系统请求流量的瞬间猛增，有可能会将系统压垮。有了消息队列可以将大量请求缓存起来，分散到很长一段时间处理，这样可以大大 提到系统的稳定性和用户体验。\n互联网公司的大促场景(双十一、店庆活动、秒杀活动)都会使用到 MQ。")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee16a",graph:a.$dataBlock.mermaid_382ee16a}}),t("Mermaid",{attrs:{id:"mermaid_382ee16b",graph:a.$dataBlock.mermaid_382ee16b}}),t("h3",{attrs:{id:"数据分发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据分发"}},[a._v("#")]),a._v(" 数据分发")]),a._v(" "),t("p",[a._v("通过消息队列可以让数据在多个系统更加之间进行流通。数据的产生方不需要关心谁来使用数据，只需要将数据发送到消息队列，数据使用方直接在消 息队列中直接获取数据即可。\n接口调用的弊端，无论是新增系统，还是移除系统，代码改造工作量都很大。\n使用 MQ 做数据分发好处，无论是新增系统，还是移除系统，代码改造工作量较小。 所以使用 MQ 做数据的分发，可以提高团队开发的效率。")])],1)}),[],!1,null,null,null);"function"==typeof s&&s(n);e.default=n.exports}}]);