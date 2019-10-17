function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var part_5 = "And I am ";
    var part_6 = "happy that I am, ";
    var part_7 = "not giving up ";
    var part_8 = "with not only this, ";
    var part_9 = "but life as well!"

    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5, part_6, part_7, part_8, part_9);
    document.getElementById("Sentence").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull guy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var x =1982;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

public class toUpperCase {
    public static void main(String[] args) {
      String txt = "Christopher Sunshine";
      System.out.println(txt.toUpperCase());
      System.out.println(txt.toLowerCase());
    }
  }

function fixed_Method() {
    var num = 503.8675309;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
  }

  function valueFunction() {
    var str = "Hey You!";
    var res = str.valueOf();
    document.getElementById("Hey").innerHTML = res;
  }
 