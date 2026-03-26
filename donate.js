(function () {
    var TIERS = [
        { amount: 50,   label: "$50",   description: "Art supplies for 10 students" },
        { amount: 100,  label: "$100",  description: "Art supplies for 20 students" },
        { amount: 200,  label: "$200",  description: "Nature adventure field trip for one student including transportation, meals, and classes" },
        { amount: 500,  label: "$500",  description: "Art supplies for 100 students" },
        { amount: 1000, label: "$1,000",description: "Gratitude journals, workbooks, classes and cognitive behavioral tools for 10 students" },
    ];

    function buildModal() {
        var overlay = document.createElement("div");
        overlay.id = "donate-overlay";
        overlay.innerHTML = [
            '<div id="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-modal-title">',
            '  <button id="donate-modal-close" aria-label="Close donation panel">&times;</button>',
            '  <p id="donate-modal-intro">Thank you for supporting Just Gather. Our work relies on support from community partners.</p>',
            '  <p id="donate-modal-sub">Your gift at any level promotes wellness. Choose your own amount or consider the following levels:</p>',
            '  <div id="donate-tiers">',
            TIERS.map(function (t) {
                return [
                    '<button class="donate-tier" data-amount="' + t.amount + '">',
                    '  <span class="donate-tier__amount">' + t.label + '</span>',
                    '  <span class="donate-tier__desc">' + t.description + '</span>',
                    '</button>'
                ].join('');
            }).join(''),
            '  </div>',
            '  <div id="donate-custom-wrap">',
            '    <label for="donate-custom-input">Or enter your own amount (USD)</label>',
            '    <div id="donate-custom-row">',
            '      <span id="donate-custom-symbol">$</span>',
            '      <input id="donate-custom-input" type="number" min="1" step="1" placeholder="e.g. 75">',
            '    </div>',
            '  </div>',
            '  <button id="donate-submit">Donate Now</button>',
            '  <p id="donate-error" hidden>Please select a level or enter a valid amount.</p>',
            '</div>'
        ].join('');
        document.body.appendChild(overlay);

        var selectedAmount = null;

        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal();
        });

        document.getElementById("donate-modal-close").addEventListener("click", closeModal);

        document.querySelectorAll(".donate-tier").forEach(function (btn) {
            btn.addEventListener("click", function () {
                document.querySelectorAll(".donate-tier").forEach(function (b) { b.classList.remove("donate-tier--selected"); });
                btn.classList.add("donate-tier--selected");
                selectedAmount = parseInt(btn.getAttribute("data-amount"), 10);
                document.getElementById("donate-custom-input").value = "";
                document.getElementById("donate-error").hidden = true;
            });
        });

        document.getElementById("donate-custom-input").addEventListener("input", function () {
            document.querySelectorAll(".donate-tier").forEach(function (b) { b.classList.remove("donate-tier--selected"); });
            selectedAmount = null;
            document.getElementById("donate-error").hidden = true;
        });

        document.getElementById("donate-submit").addEventListener("click", function () {
            var customVal = parseFloat(document.getElementById("donate-custom-input").value);
            var amount = selectedAmount || (customVal > 0 ? customVal : null);
            if (!amount) {
                document.getElementById("donate-error").hidden = false;
                return;
            }
            closeModal();
            if (typeof CollectCheckout === "undefined") {
                alert("Donation flow ready!\n\nSelected amount: $" + amount + "\n\n(CollectCheckout SDK is not available on local file:// — this will redirect to the payment page when the site is live.)");
                return;
            }
            CollectCheckout.redirectToCheckout({
                type: "sale",
                lineItems: [
                    {
                        lineItemType: "fixedPayment",
                        description: "Donation – Just Gather Wellness",
                        unitPrice: amount,
                        quantity: 1,
                        currency: "USD"
                    }
                ],
                successUrl: null,
                cancelUrl: null,
                receipt: {
                    showReceipt: true,
                    sendToCustomer: true
                },
                collectShippingInfo: true,
                useKount: false,
                paymentMethods: [
                    { type: "creditCard", use3DSecure: false },
                    { type: "googlePay",  use3DSecure: false }
                ],
                fields: []
            }).then(function (error) {
                console.log(error);
            });
        });

        document.addEventListener("keydown", function onKey(e) {
            if (e.key === "Escape") { closeModal(); document.removeEventListener("keydown", onKey); }
        });
    }

    function openModal() {
        if (!document.getElementById("donate-overlay")) buildModal();
        var overlay = document.getElementById("donate-overlay");
        overlay.classList.add("donate-overlay--visible");
        document.body.classList.add("donate-modal-open");
    }

    function closeModal() {
        var overlay = document.getElementById("donate-overlay");
        if (overlay) {
            overlay.classList.remove("donate-overlay--visible");
            document.body.classList.remove("donate-modal-open");
        }
    }

    window.openDonateModal = openModal;

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".donate-trigger").forEach(function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                openModal();
            });
        });
    });
})();
