// Bai 2
document.getElementById("kq2").onclick;
document.getElementById("btnTinhTien").onclick = function (){

const kw_0_50 = 500;
const kw_50_100 = 650;
const kw_100_200 = 850;
const kw_200_350 = 1100;
const kw_350_all = 1300;

var name = document.getElementById("name").value;
var kw = document.getElementById("soKW").value;
var total = 0;
if (0< kw && kw <= 50){
    total = kw * kw_0_50;
} else if (50 < kw && kw <= 100){
    total = kw_0_50 * kw + (kw - 50)* kw_50_100;
} else if (100 < kw && kw <= 200){
    total = kw_0_50 * kw +  (kw - 50)* kw_50_100 + (kw - 100)* kw_100_200;
} else if (200 < kw && kw <= 350){
    total = kw_0_50 * kw +  (kw - 50)* kw_50_100 + (kw - 100)* kw_100_200 + (kw - 200)* kw_200_350;
} else if (350 < kw){
    total = kw_0_50 * kw +  (kw - 50)* kw_50_100 + (kw - 100)* kw_100_200 + (kw - 200)* kw_200_350 + (kw-350)*kw_350_all;
} else {
    console.log("Số kw không hợp lệ");
};
    document.getElementById("kq2").value = "Họ tên: " + name + " - Tiền điện: " + total;  
}

// bài tập 1:
document.getElementById("kq1").onclick;
document.getElementById("btnTinhDiem").onclick = function (){

var khuVuc = document.getElementById("khuVuc").value;
var doiTuong = document.getElementById("doiTuong").value;
var diemChuan = document.getElementById("diemChuan").value;

var diemKV = 0;
var diemDT = 0;
var diemTong = 0;

if (khuVuc == "A"){
    diemKV += 2; 
} else if (khuVuc == "B"){
    diemKV +=  1;
} else {
    diemKV += 0.5;
}
console.log(diemKV)

if (doiTuong == 1){
    diemDT += 2.5;
} else if (doiTuong == 2){
    diemDT +=  1.5;
} else {
    diemDT += 1;
}
console.log(diemDT);



var d1 = document.getElementById("diem1").value;
var d2 = document.getElementById("diem2").value;
var d3 = document.getElementById("diem3").value;
diemThucTe = Number(d1) + Number(d2) + Number(d3);
diemTong = Number(diemDT) + Number(diemKV) + diemThucTe;


if (d1==0 ||d2==0|| d3 == 0){
    document.getElementById("kq1").value = "Rớt vì điểm 0";  
} else if(diemTong < diemChuan){
    document.getElementById("kq1").value = "Tổng điểm: " + diemTong + ". KQ: rớt";  
} else if (diemTong >= diemChuan){
    document.getElementById("kq1").value = "Tổng điểm: " + diemTong + ". KQ: đậu";  
}
}

// bài 3:

document.getElementById("kq3").onclick;
document.getElementById("btnTinhThue").onclick = function (){

var thue = 0;
var thuNhapST = 0;
var thuNhapCT = 0;
var name3 = document.getElementById("name3").value;
var num3 = document.getElementById("num3").value;
var thuNhap = document.getElementById("thuNhap").value;
thuNhapCT  = Number(thuNhap) - 4e+6 - (Number(num3))*(1.6e+6);
if (thuNhap <= 60e+6){
    thue = thuNhapCT * 0.05;
} else if (thuNhapCT <= 120e+6){
    thue = thuNhapCT * 0.1;
} else if (thuNhapCT <= 210e+6){
    thue = thuNhapCT * 0.15;
} else if (thuNhapCT <= 384e+6){
    thue = thuNhapCT * 0.2;
} else if (thuNhapCT <= 624e+6){
    thue = thuNhapCT * 0.25;
} else if (thuNhapCT <= 960e+6){
    thue = thuNhapCT * 0.3;
} else {
    thue = thuNhapCT * 0.35;
};
    thuNhapST = thuNhapCT - thue;
    document.getElementById("kq3").value = "Họ tên: " + name3 +  " -"  + "Thuế: " + Number(thue) + " -" + " Thu nhập sau thuế: " + thuNhapST;
}

// bài 4


document.getElementById("kq4").onclick;
document.getElementById("btnTinhTienCap").onclick = function (){ 
var loaiKH = document.getElementById("loaiKH").value;
var maKH = document.getElementById("maKH").value;
var soKenh = document.getElementById("soKenh").value;
var soKetNoi = document.getElementById("soKetNoi").value;
var hoaDon_1 = 4.5;
var dichVu_1 = 20.5;
var kenh_1 = 7.5;

var tienCap = 0;
var hoaDon_2 = 15;
var dichVu_2 = 75;
var kenh_2 = 50;



     
if (loaiKH == 1){
  tienCap = hoaDon_1 + dichVu_1 + kenh_1 * Number(soKenh);
} 


if (loaiKH == 2 && soKetNoi <=10 ){
    tienCap = hoaDon_2 + dichVu_2 + kenh_2 * Number(soKenh);
} else if (loaiKH == 2 && soKetNoi > 10){
    tienCap = hoaDon_2 + dichVu_2 + 5 *(Number(soKetNoi)-10) + kenh_2 * Number(soKenh);
}

document.getElementById("kq4").value = "Mã KH: " + maKH + " - " + " Tiền cáp: " + tienCap + "$";
}