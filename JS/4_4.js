function check()
{
    let str=document.getElementById("id1").value ;
    let rev=str.split('').reverse().join('');
   // document.write(rev);
    if(str==rev)
    {
        document.getElementById("id2").innerHTML="String is a Palindrome";
    }
    else
    {
        document.getElementById("id2").innerHTML="String is not a Palindrome";
    }
} 