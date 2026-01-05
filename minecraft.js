async function submitOrder() {
    const mcName = document.getElementById('mc-name').value;
    const dcName = document.getElementById('dc-name').value;
    const rank = document.getElementById('targetRankName').innerText;
    const payment = document.getElementById('payment-method').value;
    
    const webhookURL = "https://discord.com/api/webhooks/1457853046112387227/GAcPWNKCxhnpCUV4D3zSSDms5EefvO9EqRHI80HdK2lKhCglQMEECBYCcD2RvSHMYg45";

    if(!mcName || !dcName) {
        alert("يرجى إدخال جميع البيانات");
        return;
    }

    const contents = {
        username: "Survival King Bot",
        embeds: [{
            title: "🛒 طلب شراء رتبة جديد!",
            color: 15844367,
            fields: [
                { name: "👑 الرتبة", value: rank, inline: true },
                { name: "🎮 اللاعب", value: mcName, inline: true },
                { name: "📱 ديسكورد", value: dcName, inline: true },
                { name: "💰 الدفع", value: payment, inline: false }
            ],
            footer: { text: "متجر Survival King" }
        }]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contents)
        });

        if (response.ok) {
alert("✅ تم إرسال طلبك بنجاح! الإدارة هتتواصل معاك على الديسكورد قريباً.");            
            closeOrderModal();
        } else {
            alert("❌ حدث خطأ في إرسال الطلب.");
        }
    } catch (error) {
        alert("❌ فشل الاتصال بالديسكورد.");
    }
}

// كود فتح وقفل المودال (النافذة)
function openOrderModal(name) {
    document.getElementById('targetRankName').innerText = name;
    document.getElementById('orderModal').style.display = 'flex';
}
function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}