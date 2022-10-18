$(function () {
    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    WTF.init("sample.json");

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init("1d4Z7b6TTyINdS9pl7Ow5q3HEkGzdPki-4IR_wrCeu9U");
    // WTF.init("2PACX-1vTa_AUAdwTGylttLFqMd0nYfMm2d5Up9UznZMifHjUq3Y4KssKRZXtJoG70avaZBA6CCmLR-pb707kk");
});
