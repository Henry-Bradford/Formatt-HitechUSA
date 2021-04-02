/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$(document).ready(function() {

    $(".product-form__option-2 .block-swatch>label").click(function (e) {
        e.stopPropagation();
        var filter_size = $.trim($(".product-form__variants>.product-form__option:first-child input:checked").val());
        var label = $.trim($(this).text());
        console.log(filter_size)
        console.log(label)
        
        $(".product-form__add-button").each(function () {
          
           var selected_variant =  $(this).data("variant").split(" / ");
         
            if (selected_variant[0] === filter_size && selected_variant[1] === label) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })

    // Signature Artist Kits Banner
    $("div#shopify-section-16152687677c498bd5").click(function() {
        window.location.href = "https://formatt-hitechusa.com/collections/signature-edition-artists";
    });
    // Filter Holders Banner
    $("div#shopify-section-1615267483ca55c88e").click(function() {
        window.location.href = "https://formatt-hitechusa.com/products/firecrest-100mm-holder-kit-v2";
    });
    // Onyx Banner
    $("div#shopify-section-16154092463addd7ae").click(function() {
        window.location.href = "https://formatt-hitechusa.com/collections/onyx";
    });
    // Firecrest Nightscape Banner
    $("div#shopify-section-1615268963aba23a3d").click(function() {
        window.location.href = "https://formatt-hitechusa.com/products/firecrest-100mm-nightscape-light-pollution-filter";
    });
    // Cinema Filters Banner
    $("div#shopify-section-1615269028b4d8b9af").click(function() {
        window.location.href = "https://formatt-hitechusa.com/collections/cinema-filters";
    });
    // Polarizers Banner
    $("div#shopify-section-16152694810a159836").click(function() {
        window.location.href = "https://formatt-hitechusa.com/collections/polarizer";
    });
    // Clearance Banner
    $("div#shopify-section-1614882581cefe8c38").click(function() {
        window.location.href = "https://formatt-hitechusa.com/collections/clearance-1";
    });
    
    $('div#shopify-section-1542984882560 .block-list.block-list--loose').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        pageDots: false,
        freeScroll: true,
        wrapAround: true
      });    
});

// Product Page Customization
$("div#shopify-section-product-recommendations").insertBefore("div#shopify-section-text-with-icons");
$("div#shopify-section-static-recently-viewed-products").insertBefore("div#shopify-section-text-with-icons");


