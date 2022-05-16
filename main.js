const { MessageEmbed, WebhookClient } = require('discord.js');

/* url: discord webhook url */
const webhookClient = new WebhookClient({ url: '/* discord webhook url */' });
const embed = new MessageEmbed()
	.setTitle('Test Title')
    .setImage("image url")
	.setColor('#33FF39');

webhookClient.send({
	content: 'Webhook test',
	username: 'Test-Bot',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});