// jsx列表渲染 map

// jsx条件渲染 && || 三元运算符

// jsx多分支逻辑渲染  处理成一个函数，模板中调用函数
// eg:getHtag

// jsx样式控制
//  行内样式，style 属性 添加样式对象， eg: styleColor
// 类名样式 className
// 动态类名 eg： active
import PostCreate from "./postCreate";
function App() {
  return (
    <div className="container">
         <PostCreate />
    </div>
  );
}

export default App;
