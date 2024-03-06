const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.picing-plan-value');

elsPaymentPeriodRadio.forEach(function (elsPaymentPeriodRadio) {
  elsPaymentPeriodRadio.addEventListener('change', function () {
    const period = elsPaymentPeriodRadio.value;
    // console.log(period);

    if (period === 'annual') {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    } else {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});