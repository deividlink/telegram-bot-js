'use strict'
var Telegram=require("telegram-node-bot")
var controle=Telegram.TelegramBaseController
var textcmd=Telegram.TextCommand
var bot=new Telegram.Telegram("780063905:AAFFbfoT88PsTjQmnQat1GkMlvCWscjmlcc")
class EventsController extends controle{
	hiAction(scope){
	
    var msg="ola mundo"
    scope.sendMessage(msg);
			}
		
	

get routes(){
	return {
		"hi":"hiAction"
	}
}
}
bot.router
.when(
	new textcmd("/hi","hi"),new EventsController()
)

