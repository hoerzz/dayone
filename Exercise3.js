var proxNama = ''
var proxPeran = ''


if (proxNama === '' && proxPeran === '')
{
    console.log('Nama harus diisi!');
}
else if(proxNama === 'mikael' && proxPeran === '') 
{
    console.log('Halo Mikael, Pilih peranmu untuk memulai game!')
}
else if (proxNama === 'nina' && proxPeran === 'ksatria')
{
    alert('Selamat datang di Dunia Proxytia, Nina');
    console.log('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!');
}
else if(proxNama === 'danu' && proxPeran === 'tabib')
{
    alert('Selamat datang di Dunia Proxytia, Danu');
    console.log('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.');
}
else if(proxNama === 'zero' && proxPeran === 'penyihir')
{
    alert('Selamat datang di Dunia Proxytia, Zero'); 
    console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!');
}
else
{
    console.log('selesai')
}