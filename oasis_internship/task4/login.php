<?php
$con = mysqli_connect("localhost", "root", "", "Details_database");
if (mysqli_connect_errno()) {
    printf("Connection failed:%s", mysqli_connect_errno());
    exit;
} else {
    $name = $_POST['name'];
    $pd = $_POST['pd'];
    $pd1 = sha1($pd);
    $query = "SELECT * from Data WHERE name='$name'";
    $res = mysqli_query($con, $query);
    if (mysqli_error($con)) {
        print(mysqli_error($con));
    } else {
        if (mysqli_num_rows($res) > 0) {
            if (strlen($pd)<8) {
                echo '<script>alert("Password should have atleast 8 characters")</script>';
            } else {
                while ($row = mysqli_fetch_assoc($res)) {
                    if ($pd1 == $row['Password']) {
                        echo '<script>alert("Login is Successfull!");</script>';
                        echo '<script>window.location.href="https://en.wikipedia.org/wiki/BTS"</script>';

                    } else {
                        echo '<script>alert("Invalid Password");</script>';
                    }
                }
            }
        } else {
            echo '<script>alert("UserName doesnt exist")</script>';
        }


    }
}
?>