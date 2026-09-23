// "Speed up your visit" online-intake panel -- deliberately not present
// anywhere in get-started.html's own markup (see the comment there). It
// only gets built and inserted here, after the visitor types the classic
// Konami code (up up down down left right left right B A) anywhere on the
// page. This keeps the panel out of search results and off the page for
// anyone who doesn't already know it's there.
(function () {
    var slot = document.getElementById('nlbh-hidden-intake-slot');
    if (!slot) {
        return;
    }

    var CODE = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    var progress = 0;

    document.addEventListener('keydown', function (e) {
        var expected = CODE[progress];
        var typed = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (typed === expected) {
            progress++;
            if (progress === CODE.length) {
                progress = 0;
                reveal();
            }
        } else {
            // Restart, but don't drop a correct first keystroke of a new attempt.
            progress = (typed === CODE[0]) ? 1 : 0;
        }
    });

    function reveal() {
        if (slot.childElementCount > 0) {
            slot.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        slot.innerHTML =
            '<div class="panel">' +
                '<h2>Speed up your visit</h2>' +
                '<p>Want to save some time? You can fill out some information online before you come in or call &mdash; it\'s optional, and it doesn\'t replace talking with us.</p>' +
                '<div class="cta-row">' +
                    // TESTING ONLY: dev/test EMR server. Swap to
                    // https://staff.newleafohio.com/custom/nlbh/kiosk/request_intake.php
                    // once custom/nlbh/ is deployed to production.
                    '<a class="btn ghost" href="http://44.212.195.197:8081/custom/nlbh/kiosk/request_intake.php">Start Online</a>' +
                '</div>' +
                '<p class="disclaimer" style="margin:12px 0 0;">We\'ll email you a secure link to finish whenever is convenient for you, from your own phone or computer.</p>' +
            '</div>';
        slot.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
})();
