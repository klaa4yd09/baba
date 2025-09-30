$(document).ready(function () {
  const $message = $(".message");
  const $triggerHeart = $(".trigger-heart"); // The heart that opens/closes the message
  const $bottomHeart = $(".bottom-heart"); // The link heart at the bottom
  const $body = $("body"); // Changing background of body
  const $checkbox = $("#messageState");

  // The initial 'beating' class is assumed to be set on $triggerHeart in the HTML.

  $checkbox.on("change", function () {
    if (this.checked) {
      // OPEN

      // 1. Hide the trigger heart quickly and stop its beat
      $triggerHeart
        .removeClass("beating")
        .stop(true, true)
        .fadeOut(200, function () {
          // 2. Open the message and change background AFTER the trigger heart is gone
          $message.addClass("opened");
          $body.css("background-color", "#f48fb1");
        });

      // 3. Show the link heart at the bottom
      $bottomHeart.stop(true, true).fadeIn(400);
    } else {
      // CLOSE

      // 1. Close the message and revert background
      $message.removeClass("opened");
      $body.css("background-color", "#fce4ec");

      // 2. Hide the bottom link heart
      $bottomHeart.stop(true, true).fadeOut(400);

      // 3. Bring the trigger heart back and restart the beat
      // This is necessary so the user can interact with it next time.
      $triggerHeart.stop(true, true).fadeIn(400).addClass("beating");
    }
  });

  // Click outside the message to close it (better UX)
  $(document).on("click", function (e) {
    if (
      $checkbox.is(":checked") &&
      // Ensure the click target is NOT the message area, the bottom link heart, or the (now-hidden) trigger heart's label
      !$(e.target).closest(".message").length &&
      !$(e.target).closest(".bottom-heart").length &&
      !$(e.target).closest(".heart-label").length
    ) {
      $checkbox.prop("checked", false).trigger("change");
    }
  });
});
