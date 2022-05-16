const { MessageEmbed, WebhookClient } = require('discord.js');

/* url: discord webhook url */
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/975777851112554496/cq0wV_65W7L1PWLCpVjgjASp0D1NkAxAtKqd7-9-vM4uXkTxB_tpGcfxyqY4vvYpvNno' });



const embed = new MessageEmbed()
	.setTitle('Test Title')
    .setImage("https://res.cloudinary.com/dvclmgswx/image/upload/v1649458733/Screen-Shot-2020-07-10-at-10.24.04-AM_b8vux5.png")
	.setColor('#33FF39');

webhookClient.send({
	content: 'Webhook test',
	username: 'Test-Bot',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});