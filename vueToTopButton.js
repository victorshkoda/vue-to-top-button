const vueToTopButton = {}
const defaultOptions = {
  auto: true,
  color: "#777",
  width: 50,
  offset: 1.7,
  bg: "transparent",
  classname: "",
  bottom: 70,
  right: 70,
  transition: 300,
  radius: 50,
  type: 1
}
vueToTopButton.install = function (Vue, options) {
  let userOptions = {...defaultOptions, ...options}
  let count = 0
  let winoffset = window.innerHeight * userOptions.offset
  let inner = "&#8686;"
  if(userOptions.type === 1){
    inner = "<svg viewBox=\"0 0 44.99 60.67\" style=\"height: 90%;\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><style>.line-arrow-up4{animation: line-arrow-up4-fly 3s infinite ease-in-out;} @keyframes line-arrow-up4-fly{ 0% { transform: translate3d(0, 60px, 0);}30% {transform: translate3d(0, -4px, 0);} 40% {transform: translate3d(0, 0, 0);} 50% {transform: translate3d(0, -4px, 0);}70% {transform: translate3d(0, 0, 0);}100% {transform: translate3d(0, -60px, 0);}}@media (prefers-reduced-motion: reduce) {.line-arrow-up4 {animation: none;}}</style><path class=\"line-arrow-up4 stroke1 fill1\" d=\"M30,59.67H15.85a1,1,0,0,1-1-1V30.72a1,1,0,0,0-1-1H1.5a.5.5,0,0,1-.39-.81L22.53,1.19a.5.5,0,0,1,.79,0L43.89,28.92a.5.5,0,0,1-.4.8H32a1,1,0,0,0-1,1v28A1,1,0,0,1,30,59.67Z\" fill=\"" + userOptions.color + "\" stroke=\"transparent\" stroke-width=\"0\" style=\"animation-duration: 2.5s;\"></path></svg>"
  }
  if(userOptions.radius > 50) userOptions.radius = 50
  if(userOptions.radius < 0) userOptions.radius = 0
  if(userOptions.auto){
    Vue.mixin({
      created() {
        this.test(count)
        count += 1
      },
      methods:{
        addDiv(q){
          let div = document.createElement('div');
          if(userOptions.classname) div.className = userOptions.classname
          div.setAttribute("id", "vs_to_top_btn");
          div.innerHTML = inner
          div.style.position = "fixed"
          div.style.textAlign = "center"
          div.style.bottom = userOptions.bottom + "px"
          div.style.right = userOptions.right + "px"
          div.style.width = userOptions.width + "px"
          div.style.height = userOptions.width + "px"
          div.style.cursor = "pointer"
          div.style.background = userOptions.bg
          div.style.border = (userOptions.width - 10) / 10 + "px solid " + userOptions.color
          div.style.color = userOptions.color
          div.style.fontSize = (userOptions.width - 5) + "px"
          div.style.display = "flex"
          div.style.justifyContent = "center"
          div.style.alignItems = "center"
          div.style.borderRadius = userOptions.radius + "%"
          div.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          if(q){
            div.style.opacity = 0
            document.body.append(div);
            window.setTimeout(() => {
              div.style.transition = "opacity "+ userOptions.transition * 2 +"ms"
              div.style.opacity = 1
            }, 1)
          }else{
            let el = document.querySelector('#vs_to_top_btn')
            if(el){
              el.style.opacity = 0
              el.style.transition = "opacity "+ userOptions.transition +"ms"
              window.setTimeout(() => el.parentNode.removeChild(el), userOptions.transition)
            }
          }
        },
        test(c){
          if(c===0){
            let cnt = 0
            let cnt1 = 0
            window.addEventListener('scroll', function () {
              if(window.pageYOffset > winoffset){
                cnt1 = 0
                if(cnt === 0){
                  this.addDiv(true)
                  cnt++
                }
              }else{
                cnt = 0
                if(cnt1 === 0){
                  this.addDiv(false)
                }
                cnt1++
              }
            }.bind(this))
          }
        }
      }
    });
  }else{
    Vue.directive('mydir', {
      bind (el) {
        if(userOptions.classname) el.className = userOptions.classname
        el.setAttribute("id", "vs_to_top_btn");
        el.innerHTML = inner
        el.style.position = "fixed"
        el.style.textAlign = "center"
        el.style.bottom = userOptions.bottom + "px"
        el.style.right = userOptions.right + "px"
        el.style.width = userOptions.width + "px"
        el.style.height = userOptions.width + "px"
        el.style.cursor = "pointer"
        el.style.background = userOptions.bg
        el.style.border = (userOptions.width - 10) / 10 + "px solid " + userOptions.color
        el.style.color = userOptions.color
        el.style.fontSize = (userOptions.width - 5) + "px"
        el.style.display = "none"
        el.style.justifyContent = "center"
        el.style.alignItems = "center"
        el.style.borderRadius = userOptions.radius + "%"
        el.style.opacity = 0
        el.style.transition = "opacity "+ userOptions.transition +"ms"
        if(window.pageYOffset > winoffset){
          el.style.display = 'flex'
          el.style.opacity = 1
        }else{
          el.style.display = 'none'
          el.style.opacity = 0
        }
        el.onclick = function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.addEventListener('scroll', function () {
          if(window.pageYOffset >= winoffset){
            el.style.display = 'flex'
            window.setTimeout(() => el.style.opacity = 1, 10)
            el.style.transition = "opacity "+ userOptions.transition +"ms"
          }else{
            el.style.opacity = 0
            el.style.display = 'none'
          }
        })
      }
    })
  }
}
export default vueToTopButton
