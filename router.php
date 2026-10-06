<?php
// Router for local PHP development server
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Strip /static-site prefix if present (supports both http://127.0.0.1:5500/ and http://127.0.0.1:5500/static-site/)
if (strpos($uri, '/static-site/') === 0) {
    $uri = substr($uri, strlen('/static-site'));
} elseif ($uri === '/static-site') {
    $uri = '/';
}

$file = __DIR__ . $uri;

if ($uri !== '/' && file_exists($file) && !is_dir($file)) {
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $mimes = [
        'css'  => 'text/css',
        'js'   => 'application/javascript',
        'json' => 'application/json',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'svg'  => 'image/svg+xml',
        'webp' => 'image/webp',
        'ico'  => 'image/x-icon',
        'html' => 'text/html'
    ];
    if (isset($mimes[$ext])) {
        header('Content-Type: ' . $mimes[$ext]);
    }
    readfile($file);
    exit;
}

if (($uri === '/' || $uri === '') && file_exists(__DIR__ . '/index.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile(__DIR__ . '/index.html');
    exit;
}

http_response_code(404);
echo "404 Not Found";
