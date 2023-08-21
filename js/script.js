let totalPrice = 0;

function clickProduct(event){
    const ol = document.getElementById('ol');
    const name = event.childNodes[5].innerText;
    const price = event.childNodes[7].childNodes[0].innerText;
    const li = document.createElement('li');
    li.innerText = name;
    ol.appendChild(li);
    totalPrice = parseFloat(price) + totalPrice;
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice.toFixed(2);
    
    if(totalPrice > 0){
        const makePurchases = document.getElementById('make-purchase');
        makePurchases.removeAttribute('disabled');
    }
    if(totalPrice >= 200){
        const apply = document.getElementById('apply-btn');
        apply.removeAttribute('disabled')
    }
};

function couponApply(){
    const code = document.getElementById('coupon-code');
    const applyButton = document.getElementById('apply-btn')
    if(code.value === 'SELL200'){
        const percentage = (20 / 100) * totalPrice;
        const discount = document.getElementById('discount')
        discount.innerText = percentage.toFixed(2);
        const total = document.getElementById('total');
        const totalAfterDiscount = totalPrice - discount.innerText
        total.innerText = totalAfterDiscount.toFixed(2);
    }
    else{
        alert('Your coupon code is invalid. Please insert a valid Coupon Code')
    }
};

function goHome(){
    window.location.href = 'index.html'
};