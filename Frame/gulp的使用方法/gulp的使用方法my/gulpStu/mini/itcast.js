var datas=[{name:"jim1",age:9,gender:"男"},{name:"jim2",age:19,gender:"女"},{name:"jim3",age:29,gender:"男"},{name:"jim4",age:39,gender:"女"},{name:"jim5",age:49,gender:"女"},{name:"jim6",age:59,gender:"男"},{name:"jim7",age:69,gender:"女"}];I('<table width="400" border="1"><tbody>'+I.map(datas,function(e){return"<tr>"+I.map(e,function(e,n){return"<td>"+e+"</td>"}).join("")+"</tr>"}).join("")+"</tbody></table>").appendTo("#container"),I("#container tr").on("mouseover",function(){this.style.backgroundColor="yellow"}).mouseout(function(){this.style.backgroundColor=""}),I("#container > table > tbody > tr").mouseover(function(){I(this).prevAll().each(function(){this.style.backgroundColor="red"}).end().nextAll().each(function(){this.style.backgroundColor="green"})}).mouseout(function(){I(this).each(function(){this.style.backgroundColor=""}).siblings().each(function(){this.style.backgroundColor=""})});