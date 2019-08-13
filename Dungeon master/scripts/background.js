function block() 
{
	chrome.webRequest.onBeforeRequest.addListener(function(details) 
	{
		if(details.url.match("bb2.mp3"))
			return {redirectUrl: 'http://soundboard.ass-we-can.com/static/music/BillyH/AAAAAAAH.mp3'};
	},{urls: ["*://*.vk.com/*"]},["blocking"]);
}
	
function icon() 
{
	chrome.browserAction.onClicked.addListener(function(tab)
	{
		chrome.tabs.query({currentWindow: true, active : true}, function(tab)
		{
			if(tab[0].url != "chrome://extensions/")
			{
				chrome.tabs.query({url: "chrome://extensions/"}, function(tabs) 
				{
					if(tabs.length == 0)
						chrome.tabs.create({url: "chrome://extensions/"});
					else 
						chrome.tabs.update(tabs[0].id, {active:true});
				});
			}
		});
	});
}

block();
icon();