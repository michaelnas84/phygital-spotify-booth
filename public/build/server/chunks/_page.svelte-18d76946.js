import { c as create_ssr_component, d as add_attribute, v as validate_component, f as createEventDispatcher, h as each, e as escape } from './ssr-3aaad218.js';
import { initializeApp } from 'firebase/app';
import 'vanilla-masker';
import 'html2canvas';
import 'spotify-api.js';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDG9dTKCu0vVHq_0xbVDAHTDSSbr2DjJjs",
  authDomain: "spotify-booth.firebaseapp.com",
  projectId: "spotify-booth",
  storageBucket: "spotify-booth.appspot.com",
  messagingSenderId: "945827233148",
  appId: "1:945827233148:web:c3930f33f8de1aa49bb8f9",
  measurementId: "G-0NJ55N0J9T"
};
initializeApp(firebaseConfig);
const Consent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let checked = false;
  function handleIsChecked(checked2) {
    if (checked2) {
      dispatch("agreed");
    }
  }
  {
    handleIsChecked(checked);
  }
  return `<div class="carousel-item w-screen h-screen flex justify-center items-center box-border"><form class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] p-8 flex flex-col space-y-8" action=""><h1 class="font-['Gotham'] font-bold text-4xl" data-svelte-h="svelte-x3bvwm">Termos e condições</h1> <div class="overflow-scroll bg-neutral-800 rounded-[10px] p-4 overflow-x-auto flex-1 text-2xl" data-svelte-h="svelte-yh6n4v">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea accusamus, molestias debitis nihil nemo, fugit nam odit labore quibusdam quidem in, modi cumque id rerum? Quas, soluta. Blanditiis quisquam aperiam reprehenderit tempore maxime soluta alias necessitatibus dignissimos et temporibus sint molestiae incidunt ea suscipit saepe facere consequatur repudiandae nulla molestias sequi, fugit est officia hic. Perspiciatis minus aliquid cumque rerum quaerat quisquam non, quibusdam laboriosam eum eveniet sed deserunt dicta ullam a delectus provident facilis consequuntur? Reprehenderit ea maxime vel. Necessitatibus earum et inventore vitae, at, reiciendis voluptate iure aut minima nulla vero placeat autem delectus itaque sequi, repellat quia ipsa odit perspiciatis. Accusamus maiores odio animi esse, repudiandae numquam fuga? Fuga culpa ad non molestias. Praesentium, quidem, enim, saepe commodi optio similique incidunt ducimus voluptate impedit asperiores rem delectus nulla reprehenderit. Nulla expedita vel repellat est voluptate similique ab fuga laudantium eveniet, explicabo quae beatae animi fugiat tempora impedit sunt eaque culpa consequatur magni voluptas dolore nihil ut cumque. Cupiditate aspernatur quod reprehenderit voluptate fugiat accusamus totam similique sed vitae, dignissimos in, unde facere voluptatum a error? Distinctio assumenda suscipit natus modi! Dolor voluptate animi ab eum id! Dolorem reiciendis saepe, doloribus explicabo soluta maiores. Reiciendis, porro. Quasi similique deleniti eum hic eos fugiat veniam fuga inventore eius rem amet ea numquam voluptatem ipsam nobis aspernatur expedita asperiores, tenetur dicta, eveniet iusto voluptate? Natus atque id laudantium illum sequi? Odio harum aliquam soluta doloribus eligendi officiis itaque amet autem corporis dolor consectetur deleniti quisquam consequatur quia dicta id, repellat sit, tempore labore culpa enim nemo reprehenderit veritatis nulla! Impedit delectus ipsa, veritatis amet hic repellat nobis sit, ullam maxime dicta cupiditate vel praesentium magni. Voluptatem dicta, harum voluptates accusantium hic iusto, doloremque tempora, consequatur saepe consequuntur dolor? Quisquam error cupiditate sed repudiandae harum veritatis nostrum rerum ab inventore deleniti quo aliquam delectus vitae, ipsa dolores placeat saepe quidem? Expedita quo autem ratione ullam fuga fugiat, quaerat possimus nemo cumque nostrum optio animi tenetur, quibusdam voluptas ipsam reprehenderit? Tenetur asperiores sit ipsum perspiciatis quisquam commodi necessitatibus veritatis totam error itaque pariatur est, mollitia tempore, dicta dolorem neque, quibusdam dignissimos perferendis. Assumenda saepe, cum dolore atque repellendus nam modi accusamus magni, rem laudantium facere totam ipsa omnis voluptate doloribus ut ea dolor aut amet, quasi non ratione tenetur quisquam. Corporis nostrum omnis debitis est velit incidunt aut eum tenetur ab quisquam, deserunt possimus optio fuga, labore quasi accusantium iure libero doloribus odio similique recusandae, necessitatibus cum explicabo! Adipisci vel aspernatur vitae voluptas non? Aspernatur reprehenderit temporibus quas quaerat maxime aut sit labore explicabo ipsa quibusdam, cumque, minus dolor unde iusto. Voluptas possimus eos officia maiores est ex velit in, ratione dolores praesentium nam eaque aspernatur rerum saepe nihil vel. Officia nam sint fugiat quo doloremque, consectetur tenetur saepe laudantium, vero dignissimos distinctio obcaecati quidem voluptatem! Accusamus quaerat officiis quam provident ut recusandae perferendis ab illo explicabo, eius, iusto minima a sunt magnam ipsum, voluptas minus blanditiis magni facilis. Officiis nostrum sint dolore in repudiandae est eaque placeat, numquam cupiditate modi accusantium voluptatibus optio molestias tempora praesentium magni quis nobis nisi obcaecati necessitatibus unde velit impedit excepturi aut. Nihil laborum earum placeat autem iusto non cupiditate et, est sit quod, dolorem quaerat incidunt quia itaque reprehenderit qui obcaecati voluptatum quam eveniet ducimus fuga repudiandae libero ex praesentium. Veritatis quibusdam vitae mollitia voluptate illo! Alias ipsam nam placeat minima sed, corrupti id sint non a blanditiis reprehenderit laudantium sit inventore consequatur quibusdam ea aliquid atque. Facilis culpa nesciunt, molestiae reprehenderit vero ut voluptate velit necessitatibus veritatis doloremque laborum suscipit. Doloribus aspernatur similique aperiam fugit molestias possimus officiis a aliquid temporibus fuga facere, sint quia sunt ipsam alias quis modi, adipisci voluptas? Exercitationem officia molestias maiores tempore praesentium ad ea odio, dignissimos sapiente consequuntur id at cum libero explicabo quibusdam ratione dolorum, aliquid blanditiis nobis suscipit quae eveniet labore enim reprehenderit! Veniam atque nobis quibusdam unde, sint porro aliquid ea at. Quam voluptatibus explicabo ut iusto cumque, quasi fugit quia aperiam nihil quos nesciunt et nam voluptates, possimus cum. Veritatis magni quia hic sed deleniti nemo, quae, a delectus fuga itaque ab. Tempora, quo eius!</div> <div class="flex items-center space-x-1"><input type="checkbox" class="w-4 h-4"${add_attribute("value", checked, 0)}> <span class="font-['Gotham'] font-light text-2xl" data-svelte-h="svelte-1u1fo5m">Li e estou de acordo</span></div></form></div>`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { placeholder } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<input class="w-full bg-neutral-800 rounded-[10px] p-[1em] font-light font-['Gotham'] border-[3px] text-2xl text-center"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>`;
});
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { placeholder } = $$props;
  let input;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<input class="w-full bg-neutral-800 rounded-[10px] p-[1em] font-light font-['Gotham'] border-[3px] text-2xl text-center"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}${add_attribute("this", input, 0)}>`;
});
function validateEmail(email2) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email2.toLowerCase());
}
function validatePhone(raw_phone) {
  const phone = raw_phone.replace(/\D/g, "");
  if (phone.length === 11 && /^([1-9]{2})?9[0-9]{8}$/.test(phone)) {
    return true;
  } else if (phone.length === 10 && /^([1-9]{2})?[2-5][0-9]{7}$/.test(phone)) {
    return true;
  } else {
    return false;
  }
}
function validateDate(raw_date) {
  const date = raw_date.split("-").reverse();
  var day = parseInt(date[0]);
  var month = parseInt(date[1]);
  var year = parseInt(date[2]);
  if (day > 31 || month > 12 || year < 1900 || year > /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear()) {
    return false;
  }
  return true;
}
const DataCapture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let nome;
  let email;
  let telefone;
  let data_nascimento;
  let validated = false;
  const nulls = [void 0, ""];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const val = [nome, email, telefone, data_nascimento].filter((element) => nulls.includes(element));
        validated = val.length == 0 && validateEmail(email) && validatePhone(telefone) && validateDate(data_nascimento);
      }
    }
    $$rendered = `<div class="carousel-item w-screen h-screen flex justify-center items-center box-border"><form class="bg-neutral-900 rounded-[10px] w-[76vw] p-[2.7vw] space-y-[3.125vw] flex flex-col items-center"><h1 class="font-['Gotham'] font-bold text-4xl" data-svelte-h="svelte-t3e8m7">Informe seus dados</h1> <div class="flex w-full"><div class="flex-1"></div> <div class="flex-1 flex flex-col space-y-[1.666vw] items-center">${validate_component(Input, "Input").$$render(
      $$result,
      { placeholder: "Nome", value: nome },
      {
        value: ($$value) => {
          nome = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      { placeholder: "Email", value: email },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      { placeholder: "Telefone", value: telefone },
      {
        value: ($$value) => {
          telefone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(DateInput, "DateInput").$$render(
      $$result,
      {
        placeholder: "Data de Nascimento",
        value: data_nascimento
      },
      {
        value: ($$value) => {
          data_nascimento = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validated ? `<button${add_attribute("class", `font-medium text-2xl text-white font-['Gotham']rounded-[10px] py-4 w-full transition-colors bg-green-500`, 0)} data-svelte-h="svelte-b89m2p">Confirmar</button>` : `<button disabled${add_attribute("class", `font-medium text-2xl text-white font-['Gotham']rounded-[10px] py-4 w-full transition-colors bg-zinc-700`, 0)} data-svelte-h="svelte-aj197i">Confirmar</button>`}</div> <div class="flex-1"></div></div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Idle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-screen h-screen flex justify-center items-center carousel-item"><div class="flex flex-col items-center space-y-[59px]"><div class="flex items-center flex-col sm:flex-row" data-svelte-h="svelte-1u1l5o1"><img class="w-[14.6vw] bg-green-500" src="spotify-logo.png" alt="Spotify Logo"> <span class="text-green-500 text-[2.86vw] font-['Gotham'] font-bold">Booth</span></div>   <img class="w-[15.625vw]" src="play.png" alt="Play Button"></div></div>`;
});
const TrackCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track } = $$props;
  let { color = "black" } = $$props;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div class="${"card card-side bg-" + escape(color, true) + " shadow-xl mt-12 z-10"}" style="margin-bottom: -2rem"><figure><img${add_attribute("src", track.album?.images[0].url, 0)} alt="" class="w-[8.333vw] h-[8.333vw]"></figure> <div class="flex flex-col justify-around p-[1.666vw]"><h2 class="card-title text-4xl whitespace-nowrap overflow-x-clip max-w-[60vw]">${escape(track.name)}</h2> <p class="text-2xl">${escape(track.album?.name)}</p></div></div>`;
});
const TrackPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track } = $$props;
  let { color = "black" } = $$props;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div class="${"card card-side bg-" + escape(color, true) + " shadow-xl mt-0"}"><iframe title="audio_track" class="mt-0"${add_attribute("src", track.previewURL, 0)}></iframe></div>`;
});
const MusicConfirm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track } = $$props;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  return `  <div class="carousel-item w-screen h-screen flex flex-col justify-center items-center"><h2 class="font-['Gotham'] font-medium text-4xl text-white" data-svelte-h="svelte-11nov17">Confirme sua seleção</h2> ${validate_component(TrackCard, "TrackCard").$$render($$result, { track, color: "neutral-900" }, {}, {})} ${track.previewURL ? `${validate_component(TrackPlayer, "TrackPlayer").$$render($$result, { track, color: "neutral-900" }, {}, {})}` : ``}</div>`;
});
const PhotoCapture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let video;
  let output;
  const numbers = ["3", "2", "1"];
  let countdown = -1;
  createEventDispatcher();
  return `<div class="carousel-item w-screen h-screen flex flex-col justify-center items-center box-border space-y-[2vw]"><h1 class="font-['Gotham'] font-medium text-4xl" data-svelte-h="svelte-73mukw">Sorria para a foto!</h1> <form class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] p-[2.7vw] flex flex-col items-center" action=""><div class="flex w-full h-full items-center"><div class="flex-1 text-9xl flex flex-col items-start h-full justify-between">${each(numbers, (number, i) => {
    return `<span${add_attribute("class", i > countdown ? "invisible" : "visible", 0)}>${escape(number)}</span>`;
  })}</div>  <div class="flex flex-col h-full justify-between"><video class="w-[28vw] h-[28vw] object-cover"${add_attribute("this", video, 0)}></video> <button class="font-medium text-4xl text-white font-['Gotham'] bg-green-500 rounded-[10px] py-[1em] px-[2em]" data-svelte-h="svelte-62bo81">Xiiiis!</button></div> <div class="flex-1 text-9xl flex flex-col items-end h-full justify-between">${each(numbers, (number, i) => {
    return `<span${add_attribute("class", i > countdown ? "invisible" : "visible", 0)}>${escape(number)}</span>`;
  })}</div></div></form> <canvas class="hidden"${add_attribute("this", output, 0)}></canvas></div>`;
});
function getDurationString(duration) {
  const second = 1e3;
  const minute = second * 60;
  const minutes = Math.floor(duration / minute);
  const seconds = Math.ceil(duration % minute / second);
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}
const PhotoConfirm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { track } = $$props;
  let { data } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="carousel-item w-screen h-screen flex flex-col justify-center items-center"><form class="bg-neutral-900 rounded-[10px] pt-[1vw] pb-[1.5vw] px-[3vw] flex flex-col items-center space-y-6" action=""><div class="bg-white text-black font-sans flex flex-col py-[1vw] px-[2vw]" id="pdf-body"><img${add_attribute("src", image, 0)} alt="" class="w-[28vw]"> <div class="flex items-center w-[28vw]"><div class="flex-1 w-[23vw] mt-4"><h2 class="font-medium text-xl overflow-clip block whitespace-nowrap h-8 text-black">${escape(track.name)}</h2> <h3 class="text-base overflow-clip block whitespace-nowrap h-8 text-black">${escape(track.album?.name)}</h3></div> <svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="#000"></path></svg></div> <div class="h-4"></div> <div class="flex items-center" data-svelte-h="svelte-102pet5"><div class="rounded-full aspect-square w-[0.833vw] bg-black"></div> <div class="w-full border-black border-[0.1vw]"></div></div> <div class="flex"><span class="text-base font-medium text-black" data-svelte-h="svelte-16opir8">0:00</span> <div class="flex-1"></div> <span class="text-base font-medium text-black">${escape(getDurationString(track.duration))}</span></div> <div class="flex w-full" data-svelte-h="svelte-92tqhr"><div class="flex-1"></div> <div class="flex flex-1 justify-between items-center"><svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" fill="#000"></path></svg> <svg viewBox="0 0 24 24" width="3.125vw" height="3.125vw"><path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="#000"></path></svg> <svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" fill="#000"></path></svg></div> <div class="flex-1"></div></div> <div class="h-6"></div> <img class="self-center w-[12.833vw] border border-black"${add_attribute("src", `https://scannables.scdn.co/uri/plain/png/ffffff/black/1000/${track.uri}`, 0)} alt=""></div> <button class="font-medium text-4xl text-white font-['Gotham'] bg-green-500 rounded-[10px] py-[1em] px-[2em]" data-svelte-h="svelte-y59p1q">Imprimir</button> <button style="display: none !important" id="next-finish"></button></form></div>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let search;
  return `<div class="carousel-item w-screen h-screen flex justify-center items-center box-border"><div class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] flex flex-col p-4 items-center"><form class="flex w-full"><div class="flex-1 join"><svg viewBox="0 0 24 24" width="1em" height="1em" class="input w-16 join-item rounded-l-full text-black"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" fill="#000"></path></svg> <input class="input rounded-r-full w-full join-item overflow-hidden focus:outline-none text-2xl text-black" type="text"${add_attribute("value", search, 0)}></div> <div class="flex-[1]"></div> <button></button></form> ${``}</div></div>`;
});
const ThankYou = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel-item w-screen h-screen flex flex-col justify-center items-center box-border space-y-2" data-svelte-h="svelte-1xmlp4b"><div class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] flex justify-center items-center mt-auto"><span class="font-['Gotham'] font-medium text-6xl">Obrigado!</span></div> <img class="w-[12.5vw] filter brightness-0 invert" src="phygital-logo.png" alt="Phygital Logo"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let track;
  let image;
  let container;
  let data;
  track = {};
  image = "";
  return `<div class="carousel w-screen h-screen bg-black"${add_attribute("this", container, 0)}>${validate_component(Idle, "Idle").$$render($$result, {}, {}, {})} ${validate_component(DataCapture, "DataCapture").$$render($$result, {}, {}, {})} ${validate_component(Consent, "Consent").$$render($$result, {}, {}, {})} ${validate_component(Search, "Search").$$render($$result, {}, {}, {})} ${validate_component(MusicConfirm, "MusicConfirm").$$render($$result, { track }, {}, {})} ${validate_component(PhotoCapture, "PhotoCapture").$$render($$result, {}, {}, {})} ${validate_component(PhotoConfirm, "PhotoConfirm").$$render($$result, { image, track, data }, {}, {})} ${validate_component(ThankYou, "ThankYou").$$render($$result, {}, {}, {})}</div> ${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-18d76946.js.map
