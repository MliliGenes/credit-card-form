var app = new Vue({
  el: "#app",
  data: {
    cardHolders: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    otherCardMask: "#### #### #### ####",
  },
  computed: {
    generateCardNumberMask() {
      return this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
    holder_number: function () {
      if (this.cardNumber.trim() == "") {
        return "#### #### #### ####";
      }
      return (
        this.cardNumber +
        [
          "#",
          "#",
          "#",
          "#",
          " ",
          "#",
          "#",
          "#",
          "#",
          " ",
          "#",
          "#",
          "#",
          "#",
          " ",
          "#",
          "#",
          "#",
          "#",
        ]
          .splice(this.cardNumber.length, 19)
          .join("")
      );
    },
    holder_month: function () {
      if (this.month.trim() == "") {
        return "mm";
      }
      return this.month;
    },
    holder_year: function () {
      if (this.year.trim() == "") {
        return "yyyy";
      }
      return this.year;
    },
    holder_cardHolders: function () {
      if (this.cardHolders.trim() == "") {
        return "Full Name";
      }
      return this.cardHolders;
    },
    holder_cvv: function () {
      if (this.cvv.trim() == "") {
        return "###";
      }
      return this.cvv + ["#", "#", "#"].splice(this.cvv.length, 4).join("");
    },
  },
  methods: {
    NumbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
});
