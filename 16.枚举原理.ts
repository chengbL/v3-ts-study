enum Gender {
  'Unknown' = -1,
  'Gril',
  'Boy'
}
// 会被编译为以下 JS 代码：
// var Gender
// ;(function (Gender) {
//   Gender[(Gender['Unknown'] = -1)] = 'Unknown'

//   Gender[(Gender['Gril'] = 0)] = 'Gril'
//   Gender[(Gender['Boy'] = 1)] = 'Boy'
// })(Gender || (Gender = {}))

/* 
Gender
1. undefined
2. {}
3. { Unknown: -1 , -1 : 'Unknown'}
4. { Unknown: -1 , -1 : 'Unknown' , Gril:0, 0:'gril'}
5. { Unknown: -1 , -1 : 'Unknown' , Gril:0, 0:'gril' , Boy:1 , 1:'Boy'}
*/
