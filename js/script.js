/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function operacion()
{
    var acum = 0;
    for (var i = 0; i < 1000; i++)
    {
        if((i%3 == 0)||(i%5 == 0))
        {
            acum+=i;
        }
    }
    alert(acum);
}
