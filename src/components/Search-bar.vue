<template>
  <input
    v-model="input"
    class="input-bar"
    type="text"
    required
    placeholder="enter an
  url"
  />
  <button type="button" @click="getUrl" class="submit-url">Submit URL</button>
  <div class="glitch-wrapper">
    <div class="glitch" :data-glitch="shortenedLink">{{ shortenedLink }}</div>
    <a @click="copyText" v-show="copyEnabled" href="/"
      ><i class="fa-sharp fa-solid fa-copy"></i
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: 'ee636b46538ac8bc95adaa5af4c1870dec6c65e6',
      input: '',
      shortenedLink: '',
      copyEnabled: false,
    };
  },
  methods: {
    async getUrl() {
      const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          long_url: this.input,
          domain: 'bit.ly',
        }),
      });
      console.log(this.input);
      const data = await res.json();
      this.shortenedLink = data.link;
      this.input = '';
      this.copyEnabled = true;
    },
    async copyText() {
      let text = document.querySelector('.glitch').innerHTML;
      await navigator.clipboard.writeText(text);
      alert('copied text ' + text);
    },
  },
};
</script>

<style scoped>
.input-bar {
  width: 40%;
  height: 10%;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  border: 3px solid rgba(43, 155, 230, 0.5);
}

/* Hide the placeholder on focus */
input:focus::placeholder {
  color: transparent;
}
.submit-url {
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
  margin-left: 10px;
  padding: 10px;
}
.submit-url:hover {
  background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  background-color: #1e62d0;
}

.submit-url:active {
  position: relative;
  top: 1px;
}

.glitch-wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.glitch {
  position: relative;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  color: rgb(10, 9, 9);
  letter-spacing: 5px;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #0ff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #0084ff;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}
i {
  font-size: 30px;
  color: #0084ff78;
  margin-left: 10px;
}
</style>
