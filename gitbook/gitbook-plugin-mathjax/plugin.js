/* Before the change */

// require(["gitbook"], function(gitbook) {
//     MathJax.Hub.Config({
//         tex2jax: {}
//     });


//     gitbook.events.bind("page.change", function() {
//         MathJax.Hub.Typeset()
//     });
// });

/* I hope it can be modified below */

require(["gitbook"], function(gitbook) {
    // MathJax.Hub.Config({
    //     tex2jax: {}
    // });
    gitbook.events.bind("page.change", function(e) {
        MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
        var math = document.getElementsByClassName("entry-content")[0];
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
    });
});
