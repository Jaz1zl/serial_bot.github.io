
const button = document.getElementById('btn')
button.style.display = "none";
let tg = window.Telegram.WebApp
tg.expand()
tg.MainButton.text = "Перейти 20..."; //изменяем текст кнопки 
tg.MainButton.setText("Перейти 20..."); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#2096c5"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#2096c5"}); //так изменяются все параметры 
var seconds = 20;

tg.MainButton.show()
tg.MainButton.enable()


function timer() {

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
			console.log(seconds)
            text = 'Перейти ' + seconds + '...'
            console.log(text)
        } else {
            seconds = 0
            tg.MainButton.setText('Продолжить')

        }
    }, 1000);
}
timer()

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    if (seconds > 0) {
        var meni_1 = 'https://1wxekk.com/casino/list?open=register#8a5v';
        tg.openLink(meni_1)
        return
    }
    tg.close();

    tg.sendData('True')
     });
