document.getElementById('menu').innerHTML = `
<nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Menú</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/prueba">Prueba</a>
        </li>
        </ul>
        <!-- <form role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </form> -->
    </div>
    </div>
</nav>
`;