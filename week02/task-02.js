

let tmpl = `<div class="newslist">
<div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
<div class="date" v-if="info.showDate">{{info.name}}</div>
<div class="img">{{info.name}}</div>
</div>`;


render(tmpl, {
	image: "https://static001.geekbang.org/resource/image/6d/8d/6d77b212819379a3fabd29607f45b78d.png", 
    info: {showImage: true, showDate:false, name: "aaa"}
})



//返回生成的DOM

function render(tmpl, data) {
    //定义虚拟DOM，对模版进行解析
    let vdom = toVDom(tmpl);
    //将虚拟DOM树转化成真实DOM树
    let dom = parse(vdom, data)
    //返回答案
    console.log(dom)
    return dom 
}

/*
* 实现思路：
    定义一个简单的虚拟DOM结构，这里将 < img /> 直接当做文本节点（content）去处理。
    因为< img />里面不会再有节点，children代表子节点
    attr表示属性，根据题目只支持v-if动态属性，isShow判断v-if是否展示
*/


function VDom(type,attr) {
    this.type = type;
    this.attr = attr;
    this.children = [];
    this.content = "";
    this.isShow = true;
}


// 使用栈的数据结构对字符串模版进行匹配 【 】
// 每匹配到一个 < >创建一个虚拟DOM节点 ，加入栈中
// 每匹配到一个 </>，出栈一个虚拟DOM节点
// 栈中的最后一个元素为虚拟DOM树的指针，从而形成DOM树

// 在while语句中先过滤掉所有<img/>，当作文本节点去处理啦

function toVDom(tmpl) {
    
    let arr = [new VDom('head')]

    tmpl = tmpl.replace(/\n/gm, "");

    const reg = /^<(\w+)([^>]*)>/m;              //匹配开始符号
    const reg2 = /^<(\w+)([^>]*)\/>/m;           //匹配<img/>文本节点
    const reg3 = /([^<]*)(<\/[^>]+>)/m;          //匹配结束符号


    while (reg.test(tmpl) || reg2.test(tmpl) || reg3.test(tmpl)) {
        if (reg2.test(tmpl)) {
            tmpl =  handlInLineDom(tmpl,arr,reg2)
        } else if(reg.test(tmpl)){
            tmpl =  handlDom(tmpl,arr,reg)
        } else if (reg3.test(tmpl,arr)) {
            tmpl =  handlContent(tmpl,arr,reg3)
        }
    }

   return arr[0].children[0]
    
}


// 将<img/>文本节点直接存入content中

function handlInLineDom(tmpl,arr,reg) {
    tmpl = tmpl.replace(reg, (s0,s1,s2,s3) => {
        arr[arr.length-1].content = s0
        return ''
    })
    return tmpl.trim()
}


// 创建vdom节点，首先插入父节点dom树中
// 再压入栈中，用于匹配标签

function handlDom(tmpl,arr,reg) {
    tmpl = tmpl.replace(reg, (s0,s1,s2,s3) => {
        let vdom = new VDom(s1, s2)
        arr[arr.length-1].children.push(vdom)
        arr.push(vdom)
        return ''
    })
    return tmpl.trim()
}

// 文本内容直接

function handlContent(tmpl,arr,reg) {
    tmpl = tmpl.replace(reg, (s0, s1, s2) => {
        if (s1 !== '') {
            arr[arr.length - 1].content = s1
        }
        arr.pop()
        return ''
    })
    return tmpl.trim()
}


function parse(vdom, data) {
    //判断attr属性v-if 如何存在v-if，为true时直接删掉这个属性，为false直接删掉这个节点
    detealVIf(vdom, data)
    //直接用字符串替换掉content属性
    detealContent(vdom, data)
    //console.log(vdom)
    let fragment = document.createDocumentFragment();
    toDom(vdom,fragment)
  
   return fragment

}


function detealVIf(vdom,data) {
   
    let reg = /v\-if\=['"](.*?)['"]/
    
    //处理当前层逻辑
    let result = reg.exec(vdom.attr)
    
    if (result && result.length > 0) {
        let props = result[1].split(".");
        let val = data;
        props.forEach(item => {   
            val=  val[item]
        })
        
        if (val) {
            //为true渲染节点，所以删掉v-if
            vdom.attr = vdom.attr.replace(reg,'')
        } else {
            //为false不渲染节点，删除当前节点比较麻烦就直接给当前节点加一个不渲染属性
            vdom.isShow = false
        }  
    }

    //迭代到下一层
    vdom.children.map((item) => {
        detealVIf(item,data)
    })
}



function detealContent(vdom, data) {
    if (vdom.isShow === false  ) {
        return;
    }
    let reg = /\{\{(.*)\}\}/
    let result= reg.exec(vdom.content)
    vdom.content = vdom.content.replace(reg, (s0, s1, s2) => {
        let props = result[1].split(".");
        let val = data;
        props.forEach(item => {   
            val=  val[item]
        }) 
        return val
    })

    vdom.children.map((item) => {
        detealContent(item,data)
    })

}

function toDom(vdom,root) {
    if (!vdom.isShow) {
        return 
    }
    let node = document.createElement(vdom.type)
    node = detalAttr(node,vdom)
    root.appendChild(node)
    
    if (vdom.children.length === 0) {
        node.innerHTML = vdom.content
    }
    
    vdom.children.forEach(item => {
        toDom(item,node)
    })
}


function detalAttr(node, vdom) {
    let reg = /class\=['"](.*)['"]/
    let result = reg.exec(vdom.attr);
    if (result && result.length > 0) {
        node.className = result[1]
    }
    return node
}

