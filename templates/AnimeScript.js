document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class .box div
    const boxes = document.querySelectorAll(".box div");

    // ASCII art data
    const asciiArtData = [
        "\n      \n      \n      \n      \n      \n      \n      \n      \n",
        "\n _  \n| | \n| | \n| | \n|_| \n(_) \n    \n    \n",
        "\n _ _  \n( | ) \n V V  \n      \n      \n      \n      \n      \n",
        "\n   _  _    \n _| || |_  \n|_  __  _| \n _| || |_  \n|_  __  _| \n  |_||_|   \n           \n           \n",
        "\n  _   \n | |  \n/ __) \n\\__ \\ \n(   / \n |_|  \n      \n      \n",
        "\n _   __ \n(_) / / \n   / /  \n  / /   \n / / _  \n/_/ (_) \n        \n        \n",
        "\n         \n  ___    \n ( _ )   \n / _ \\/\\ \n| (_\u003e  \u003c \n \\___/\\/ \n         \n         \n",
        "\n _  \n( ) \n|/  \n    \n    \n    \n    \n    \n",
        "\n  __ \n / / \n| |  \n| |  \n| |  \n| |  \n \\_\\ \n     \n",
        "\n__   \n\\ \\  \n | | \n | | \n | | \n | | \n/_/  \n     \n",
        "\n    _     \n /\\| |/\\  \n \\ ` ' /  \n|_     _| \n / , . \\  \n \\/|_|\\/  \n          \n          \n",
        "\n        \n   _    \n _| |_  \n|_   _| \n  |_|   \n        \n        \n        \n",
        "\n    \n    \n    \n    \n _  \n( ) \n|/  \n    \n",
        "\n         \n         \n ______  \n|______| \n         \n         \n         \n         \n",
        "\n    \n    \n    \n    \n _  \n(_) \n    \n    \n",
        "\n     __ \n    / / \n   / /  \n  / /   \n / /    \n/_/     \n        \n        \n",
        "\n        \n  ___   \n / _ \\  \n| | | | \n| |_| | \n \\___/  \n        \n        \n",
        "\n    \n _  \n/ | \n| | \n| | \n|_| \n    \n    \n",
        "\n        \n ____   \n|___ \\  \n  __) | \n / __/  \n|_____| \n        \n        \n",
        "\n        \n _____  \n|___ /  \n  |_ \\  \n ___) | \n|____/  \n        \n        \n",
        "\n         \n _  _    \n| || |   \n| || |_  \n|__   _| \n   |_|   \n         \n         \n",
        "\n        \n ____   \n| ___|  \n|___ \\  \n  __) | \n|____/  \n        \n        \n",
        "\n        \n  __    \n / /    \n| '_ \\  \n| (_) | \n \\___/  \n        \n        \n",
        "\n        \n _____  \n|___  | \n   / /  \n  / /   \n /_/    \n        \n        \n",
        "\n        \n  ___   \n ( _ )  \n / _ \\  \n| (_) | \n \\___/  \n        \n        \n",
        "\n        \n  ___   \n / _ \\  \n| (_) | \n \\__, | \n   / /  \n  /_/   \n        \n",
        "\n    \n _  \n(_) \n    \n _  \n(_) \n    \n    \n",
        "\n    \n _  \n(_) \n    \n _  \n( ) \n|/  \n    \n",
        "\n   __ \n  / / \n / /  \n\u003c \u003c   \n \\ \\  \n  \\_\\ \n      \n      \n",
        "\n         \n ______  \n|______| \n ______  \n|______| \n         \n         \n         \n",
        "\n__    \n\\ \\   \n \\ \\  \n  \u003e \u003e \n / /  \n/_/   \n      \n      \n",
        "\n ___   \n|__ \\  \n   ) | \n  / /  \n |_|   \n (_)   \n       \n       \n",
        "\n          \n   ____   \n  / __ \\  \n / / _` | \n| | (_| | \n \\ \\__,_| \n  \\____/  \n          \n",
        "\n           \n    /\\     \n   /  \\    \n  / /\\ \\   \n / ____ \\  \n/_/    \\_\\ \n           \n           \n",
        "\n ____   \n|  _ \\  \n| |_) | \n|  _ \u003c  \n| |_) | \n|____/  \n        \n        \n",
        "\n  _____  \n / ____| \n| |      \n| |      \n| |____  \n \\_____| \n         \n         \n",
        "\n _____   \n|  __ \\  \n| |  | | \n| |  | | \n| |__| | \n|_____/  \n         \n         \n",
        "\n ______  \n|  ____| \n| |__    \n|  __|   \n| |____  \n|______| \n         \n         \n",
        "\n ______  \n|  ____| \n| |__    \n|  __|   \n| |      \n|_|      \n         \n         \n",
        "\n  _____  \n / ____| \n| |  __  \n| | |_ | \n| |__| | \n \\_____| \n         \n         \n",
        "\n _    _  \n| |  | | \n| |__| | \n|  __  | \n| |  | | \n|_|  |_| \n         \n         \n",
        "\n _____  \n|_   _| \n  | |   \n  | |   \n _| |_  \n|_____| \n        \n        \n",
        "\n      _  \n     | | \n     | | \n _   | | \n| |__| | \n \\____/  \n         \n         \n",
        "\n _  __ \n| |/ / \n| ' /  \n|  \u003c   \n| . \\  \n|_|\\_\\ \n       \n       \n",
        "\n _       \n| |      \n| |      \n| |      \n| |____  \n|______| \n         \n         \n",
        "\n __  __  \n|  \\/  | \n| \\  / | \n| |\\/| | \n| |  | | \n|_|  |_| \n         \n         \n",
        "\n _   _  \n| \\ | | \n|  \\| | \n| . ` | \n| |\\  | \n|_| \\_| \n        \n        \n",
        "\n  ____   \n / __ \\  \n| |  | | \n| |  | | \n| |__| | \n \\____/  \n         \n         \n",
        "\n _____   \n|  __ \\  \n| |__) | \n|  ___/  \n| |      \n|_|      \n         \n         \n",
        "\n  ____   \n / __ \\  \n| |  | | \n| |  | | \n| |__| | \n \\___\\_\\ \n         \n         \n",
        "\n _____   \n|  __ \\  \n| |__) | \n|  _  /  \n| | \\ \\  \n|_|  \\_\\ \n         \n         \n",
        "\n  _____  \n / ____| \n| (___   \n \\___ \\  \n ____) | \n|_____/  \n         \n         \n",
        "\n _______  \n|__   __| \n   | |    \n   | |    \n   | |    \n   |_|    \n          \n          \n",
        "\n _    _  \n| |  | | \n| |  | | \n| |  | | \n| |__| | \n \\____/  \n         \n         \n",
        "\n__      __ \n\\ \\    / / \n \\ \\  / /  \n  \\ \\/ /   \n   \\  /    \n    \\/     \n           \n           \n",
        "\n__          __ \n\\ \\        / / \n \\ \\  /\\  / /  \n  \\ \\/  \\/ /   \n   \\  /\\  /    \n    \\/  \\/     \n               \n               \n",
        "\n__   __ \n\\ \\ / / \n \\ V /  \n  \u003e \u003c   \n / . \\  \n/_/ \\_\\ \n        \n        \n",
        "\n__     __ \n\\ \\   / / \n \\ \\_/ /  \n  \\   /   \n   | |    \n   |_|    \n          \n          \n",
        "\n ______ \n|___  / \n   / /  \n  / /   \n / /__  \n/_____| \n        \n        \n",
        "\n ___  \n|  _| \n| |   \n| |   \n| |   \n| |_  \n|___| \n      \n",
        "\n__      \n\\ \\     \n \\ \\    \n  \\ \\   \n   \\ \\  \n    \\_\\ \n        \n        \n",
        "\n ___  \n|_  | \n  | | \n  | | \n  | | \n _| | \n|___| \n      \n",
        "\n /\\  \n|/\\| \n     \n     \n     \n     \n     \n     \n",
        "\n         \n         \n         \n         \n         \n         \n ______  \n|______| \n",
        "\n _  \n( ) \n \\| \n    \n    \n    \n    \n    \n",
        "\n        \n        \n  __ _  \n / _` | \n| (_| | \n \\__,_| \n        \n        \n",
        "\n _      \n| |     \n| |__   \n| '_ \\  \n| |_) | \n|_.__/  \n        \n        \n",
        "\n       \n       \n  ___  \n / __| \n| (__  \n \\___| \n       \n       \n",
        "\n     _  \n    | | \n  __| | \n / _` | \n| (_| | \n \\__,_| \n        \n        \n",
        "\n       \n       \n  ___  \n / _ \\ \n|  __/ \n \\___| \n       \n       \n",
        "\n  __  \n / _| \n| |_  \n|  _| \n| |   \n|_|   \n      \n      \n",
        "\n        \n        \n  __ _  \n / _` | \n| (_| | \n \\__, | \n  __/ | \n |___/  \n",
        "\n _      \n| |     \n| |__   \n|  _ \\  \n| | | | \n|_| |_| \n        \n        \n",
        "\n _  \n(_) \n _  \n| | \n| | \n|_| \n    \n    \n",
        "\n   _  \n  (_) \n   _  \n  | | \n  | | \n  | | \n _/ | \n|__/  \n",
        "\n       \n _     \n| | _  \n| |/ / \n|   \u003c  \n|_|\\_\\ \n       \n       \n",
        "\n _  \n| | \n| | \n| | \n| | \n|_| \n    \n    \n",
        "\n            \n            \n _ __ ___   \n| '_ ` _ \\  \n| | | | | | \n|_| |_| |_| \n            \n            \n",
        "\n        \n        \n _ __   \n| '_ \\  \n| | | | \n|_| |_| \n        \n        \n",
        "\n        \n        \n  ___   \n / _ \\  \n| (_) | \n \\___/  \n        \n        \n",
        "\n        \n        \n _ __   \n| '_ \\  \n| |_) | \n| .__/  \n| |     \n|_|     \n",
        "\n        \n        \n  __ _  \n / _` | \n| (_| | \n \\__, | \n    | | \n    |_| \n",
        "\n       \n       \n _ __  \n| '__| \n| |    \n|_|    \n       \n       \n",
        "\n      \n      \n ___  \n/ __| \n\\__ \\ \n|___/ \n      \n      \n",
        "\n _    \n| |   \n| |_  \n| __| \n\\ |_  \n \\__| \n      \n      \n",
        "\n        \n        \n _   _  \n| | | | \n| |_| | \n \\__,_| \n        \n        \n",
        "\n        \n        \n__   __ \n\\ \\ / / \n \\ V /  \n  \\_/   \n        \n        \n",
        "\n           \n           \n__      __ \n\\ \\ /\\ / / \n \\ V  V /  \n  \\_/\\_/   \n           \n           \n",
        "\n       \n       \n__  __ \n\\ \\/ / \n \u003e  \u003c  \n/_/\\_\\ \n       \n       \n",
        "\n        \n        \n _   _  \n| | | | \n| |_| | \n \\__, | \n __/ /  \n|___/   \n",
        "\n      \n      \n ____ \n|_  / \n / /  \n/___| \n      \n      \n",
        "\n   __ \n  / / \n | |  \n/ /   \n\\ \\   \n | |  \n  \\_\\ \n      \n",
        "\n _  \n| | \n| | \n| | \n| | \n| | \n| | \n|_| \n",
        "\n__    \n\\ \\   \n | |  \n  \\ \\ \n  / / \n | |  \n/_/   \n      \n",
        "\n /\\/| \n|/\\/  \n      \n      \n      \n      \n      \n      \n",
        "\n      \n      \n      \n      \n      \n      \n      \n      \n",
        "\n   \n_| \n_| \n_| \n   \n_| \n   \n   \n",
        "\n_|  _| \n_|  _| \n       \n       \n       \n       \n       \n       \n",
        "\n           \n  _|  _|   \n_|_|_|_|_| \n  _|  _|   \n_|_|_|_|_| \n  _|  _|   \n           \n           \n",
        "\n       \n  _|   \n_|_|_| \n_|_|   \n  _|_| \n_|_|_| \n  _|   \n       \n",
        "\n           \n_|_|    _| \n_|_|  _|   \n    _|     \n  _|  _|_| \n_|    _|_| \n           \n           \n",
        "\n           \n  _|       \n_|  _|     \n  _|_|  _| \n_|    _|   \n  _|_|  _| \n           \n           \n",
        "\n  _| \n_|   \n     \n     \n     \n     \n     \n     \n",
        "\n  _| \n_|   \n_|   \n_|   \n_|   \n_|   \n  _| \n     \n",
        "\n_|   \n  _| \n  _| \n  _| \n  _| \n  _| \n_|   \n     \n",
        "\n           \n_|  _|  _| \n  _|_|_|   \n_|_|_|_|_| \n  _|_|_|   \n_|  _|  _| \n           \n           \n",
        "\n           \n    _|     \n    _|     \n_|_|_|_|_| \n    _|     \n    _|     \n           \n           \n",
        "\n     \n     \n     \n     \n     \n  _| \n_|   \n     \n",
        "\n           \n           \n           \n_|_|_|_|_| \n           \n           \n           \n           \n",
        "\n   \n   \n   \n   \n   \n_| \n   \n   \n",
        "\n           \n        _| \n      _|   \n    _|     \n  _|       \n_|         \n           \n           \n",
        "\n       \n  _|   \n_|  _| \n_|  _| \n_|  _| \n  _|   \n       \n       \n",
        "\n     \n  _| \n_|_| \n  _| \n  _| \n  _| \n     \n     \n",
        "\n         \n  _|_|   \n_|    _| \n    _|   \n  _|     \n_|_|_|_| \n         \n         \n",
        "\n         \n_|_|_|   \n      _| \n  _|_|   \n      _| \n_|_|_|   \n         \n         \n",
        "\n         \n_|  _|   \n_|  _|   \n_|_|_|_| \n    _|   \n    _|   \n         \n         \n",
        "\n         \n_|_|_|_| \n_|       \n_|_|_|   \n      _| \n_|_|_|   \n         \n         \n",
        "\n         \n  _|_|_| \n_|       \n_|_|_|   \n_|    _| \n  _|_|   \n         \n         \n",
        "\n           \n_|_|_|_|_| \n        _| \n      _|   \n    _|     \n  _|       \n           \n           \n",
        "\n         \n  _|_|   \n_|    _| \n  _|_|   \n_|    _| \n  _|_|   \n         \n         \n",
        "\n         \n  _|_|   \n_|    _| \n  _|_|_| \n      _| \n_|_|_|   \n         \n         \n",
        "\n   \n   \n_| \n   \n   \n_| \n   \n   \n",
        "\n     \n     \n  _| \n     \n     \n  _| \n_|   \n     \n",
        "\n       \n    _| \n  _|   \n_|     \n  _|   \n    _| \n       \n       \n",
        "\n           \n           \n_|_|_|_|_| \n           \n_|_|_|_|_| \n           \n           \n           \n",
        "\n       \n_|     \n  _|   \n    _| \n  _|   \n_|     \n       \n       \n",
        "\n       \n_|_|   \n    _| \n_|_|   \n       \n_|     \n       \n       \n",
        "\n                 \n    _|_|_|_|_|   \n  _|          _| \n_|    _|_|_|  _| \n_|  _|    _|  _| \n_|    _|_|_|_|   \n  _|             \n    _|_|_|_|_|_| \n",
        "\n         \n  _|_|   \n_|    _| \n_|_|_|_| \n_|    _| \n_|    _| \n         \n         \n",
        "\n         \n_|_|_|   \n_|    _| \n_|_|_|   \n_|    _| \n_|_|_|   \n         \n         \n",
        "\n         \n  _|_|_| \n_|       \n_|       \n_|       \n  _|_|_| \n         \n         \n",
        "\n         \n_|_|_|   \n_|    _| \n_|    _| \n_|    _| \n_|_|_|   \n         \n         \n",
        "\n         \n_|_|_|_| \n_|       \n_|_|_|   \n_|       \n_|_|_|_| \n         \n         \n",
        "\n         \n_|_|_|_| \n_|       \n_|_|_|   \n_|       \n_|       \n         \n         \n",
        "\n         \n  _|_|_| \n_|       \n_|  _|_| \n_|    _| \n  _|_|_| \n         \n         \n",
        "\n         \n_|    _| \n_|    _| \n_|_|_|_| \n_|    _| \n_|    _| \n         \n         \n",
        "\n       \n_|_|_| \n  _|   \n  _|   \n  _|   \n_|_|_| \n       \n       \n",
        "\n         \n      _| \n      _| \n      _| \n_|    _| \n  _|_|   \n         \n         \n",
        "\n         \n_|    _| \n_|  _|   \n_|_|     \n_|  _|   \n_|    _| \n         \n         \n",
        "\n         \n_|       \n_|       \n_|       \n_|       \n_|_|_|_| \n         \n         \n",
        "\n           \n_|      _| \n_|_|  _|_| \n_|  _|  _| \n_|      _| \n_|      _| \n           \n           \n",
        "\n           \n_|      _| \n_|_|    _| \n_|  _|  _| \n_|    _|_| \n_|      _| \n           \n           \n",
        "\n         \n  _|_|   \n_|    _| \n_|    _| \n_|    _| \n  _|_|   \n         \n         \n",
        "\n         \n_|_|_|   \n_|    _| \n_|_|_|   \n_|       \n_|       \n         \n         \n",
        "\n           \n  _|_|     \n_|    _|   \n_|  _|_|   \n_|    _|   \n  _|_|  _| \n           \n           \n",
        "\n         \n_|_|_|   \n_|    _| \n_|_|_|   \n_|    _| \n_|    _| \n         \n         \n",
        "\n         \n  _|_|_| \n_|       \n  _|_|   \n      _| \n_|_|_|   \n         \n         \n",
        "\n           \n_|_|_|_|_| \n    _|     \n    _|     \n    _|     \n    _|     \n           \n           \n",
        "\n         \n_|    _| \n_|    _| \n_|    _| \n_|    _| \n  _|_|   \n         \n         \n",
        "\n           \n_|      _| \n_|      _| \n_|      _| \n  _|  _|   \n    _|     \n           \n           \n",
        "\n               \n_|          _| \n_|          _| \n_|    _|    _| \n  _|  _|  _|   \n    _|  _|     \n               \n               \n",
        "\n           \n_|      _| \n  _|  _|   \n    _|     \n  _|  _|   \n_|      _| \n           \n           \n",
        "\n           \n_|      _| \n  _|  _|   \n    _|     \n    _|     \n    _|     \n           \n           \n",
        "\n           \n_|_|_|_|_| \n      _|   \n    _|     \n  _|       \n_|_|_|_|_| \n           \n           \n",
        "\n_|_| \n_|   \n_|   \n_|   \n_|   \n_|   \n_|_| \n     \n",
        "\n           \n_|         \n  _|       \n    _|     \n      _|   \n        _| \n           \n           \n",
        "\n_|_| \n  _| \n  _| \n  _| \n  _| \n  _| \n_|_| \n     \n",
        "\n  _|   \n_|  _| \n       \n       \n       \n       \n       \n       \n",
        "\n           \n           \n           \n           \n           \n           \n           \n_|_|_|_|_| \n",
        "\n_|   \n  _| \n     \n     \n     \n     \n     \n     \n",
        "\n         \n         \n  _|_|_| \n_|    _| \n_|    _| \n  _|_|_| \n         \n         \n",
        "\n         \n_|       \n_|_|_|   \n_|    _| \n_|    _| \n_|_|_|   \n         \n         \n",
        "\n         \n         \n  _|_|_| \n_|       \n_|       \n  _|_|_| \n         \n         \n",
        "\n         \n      _| \n  _|_|_| \n_|    _| \n_|    _| \n  _|_|_| \n         \n         \n",
        "\n         \n         \n  _|_|   \n_|_|_|_| \n_|       \n  _|_|_| \n         \n         \n",
        "\n         \n    _|_| \n  _|     \n_|_|_|_| \n  _|     \n  _|     \n         \n         \n",
        "\n         \n         \n  _|_|_| \n_|    _| \n_|    _| \n  _|_|_| \n      _| \n  _|_|   \n",
        "\n         \n_|       \n_|_|_|   \n_|    _| \n_|    _| \n_|    _| \n         \n         \n",
        "\n   \n_| \n   \n_| \n_| \n_| \n   \n   \n",
        "\n     \n  _| \n     \n  _| \n  _| \n  _| \n  _| \n_|   \n",
        "\n         \n_|       \n_|  _|   \n_|_|     \n_|  _|   \n_|    _| \n         \n         \n",
        "\n   \n_| \n_| \n_| \n_| \n_| \n   \n   \n",
        "\n               \n               \n_|_|_|  _|_|   \n_|    _|    _| \n_|    _|    _| \n_|    _|    _| \n               \n               \n",
        "\n         \n         \n_|_|_|   \n_|    _| \n_|    _| \n_|    _| \n         \n         \n",
        "\n         \n         \n  _|_|   \n_|    _| \n_|    _| \n  _|_|   \n         \n         \n",
        "\n         \n         \n_|_|_|   \n_|    _| \n_|    _| \n_|_|_|   \n_|       \n_|       \n",
        "\n         \n         \n  _|_|_| \n_|    _| \n_|    _| \n  _|_|_| \n      _| \n      _| \n",
        "\n         \n         \n_|  _|_| \n_|_|     \n_|       \n_|       \n         \n         \n",
        "\n         \n         \n  _|_|_| \n_|_|     \n    _|_| \n_|_|_|   \n         \n         \n",
        "\n         \n  _|     \n_|_|_|_| \n  _|     \n  _|     \n    _|_| \n         \n         \n",
        "\n         \n         \n_|    _| \n_|    _| \n_|    _| \n  _|_|_| \n         \n         \n",
        "\n           \n           \n_|      _| \n_|      _| \n  _|  _|   \n    _|     \n           \n           \n",
        "\n                   \n                   \n_|      _|      _| \n_|      _|      _| \n  _|  _|  _|  _|   \n    _|      _|     \n                   \n                   \n",
        "\n         \n         \n_|    _| \n  _|_|   \n_|    _| \n_|    _| \n         \n         \n",
        "\n         \n         \n_|    _| \n_|    _| \n_|    _| \n  _|_|_| \n      _| \n  _|_|   \n",
        "\n         \n         \n_|_|_|_| \n    _|   \n  _|     \n_|_|_|_| \n         \n         \n",
        "\n    _| \n  _|   \n  _|   \n_|     \n  _|   \n  _|   \n    _| \n       \n",
        "\n_| \n_| \n_| \n_| \n_| \n_| \n_| \n_| \n",
        "\n_|     \n  _|   \n  _|   \n    _| \n  _|   \n  _|   \n_|     \n       \n",
        "\n  _|  _| \n_|  _|   \n         \n         \n         \n         \n         \n         \n",
        "\n      \n      \n      \n      \n      \n      \n      \n      \n",
        "\n  \no \n| \no \n  \nO \n  \n  \n",
        "\no o \n| | \n    \n    \n    \n    \n    \n    \n",
        "\n      \n | |  \n-O-O- \n | |  \n-O-O- \n | |  \n      \n      \n",
        "\n  | |   \n -O-O-  \no | |   \n -O-O-  \n  | | o \n -O-O-  \n  | |   \n        \n",
        "\n      \n    O \no  /  \n  /   \n /  o \nO     \n      \n      \n",
        "\n     \n     \n  o  \n /|  \no-O- \n  |  \n     \n     \n",
        "\no \n| \n  \n  \n  \n  \n  \n  \n",
        "\n   \n / \no  \n|  \no  \n \\ \n   \n   \n",
        "\n   \n\\  \n o \n | \n o \n/  \n   \n   \n",
        "\n      \no | o \n \\|/  \n--O-- \n /|\\  \no | o \n      \n      \n",
        "\n    \n    \n |  \n-o- \n |  \n    \n    \n    \n",
        "\n  \n  \n  \n  \n  \no \n| \n  \n",
        "\n    \n    \n    \n    \no-o \n    \n    \n    \n",
        "\n  \n  \n  \n  \n  \nO \n  \n  \n",
        "\n      \n    o \n   /  \n  o   \n /    \no     \n      \n      \n",
        "\n      \n o-o  \no  /o \n| / | \no/  o \n o-o  \n      \n      \n",
        "\n      \n  0   \n /|   \no |   \n  |   \no-o-o \n      \n      \n",
        "\n     \n --  \no  o \n  /  \n /   \no--o \n     \n     \n",
        "\n     \no-o  \n   | \n oo  \n   | \no-o  \n     \n     \n",
        "\n     \no  o \n|  | \no--O \n   | \n   o \n     \n     \n",
        "\n     \no--o \n|    \no-o  \n   | \no-o  \n     \n     \n",
        "\n      \n  o   \n /    \nO--o  \no   | \n o-o  \n      \n      \n",
        "\n      \no---o \n   /  \n  o   \n  |   \n  o   \n      \n      \n",
        "\n      \n o-o  \n|   | \n o-o  \n|   | \n o-o  \n      \n      \n",
        "\n      \n o-o  \n|   o \n o--O \n   /  \n  o   \n      \n      \n",
        "\n  \n  \nO \n  \nO \n  \n  \n  \n",
        "\n  \n  \no \n  \no \n| \n  \n  \n",
        "\n    \n  o \n /  \nO   \n \\  \n  o \n    \n    \n",
        "\n     \n     \n     \no--o \no--o \n     \n     \n     \n",
        "\n    \no   \n \\  \n  O \n /  \no   \n    \n    \n",
        "\n      \n o-o  \no   o \n   /  \n  o   \n      \n  O   \n      \n",
        "\n      \n  o   \n / \\  \no O-o \n \\    \n  o-  \n      \n      \n",
        "\n      \n  O   \n / \\  \no---o \n|   | \no   o \n      \n      \n",
        "\n      \no--o  \n|   | \nO--o  \n|   | \no--o  \n      \n      \n",
        "\n      \n  o-o \n /    \nO     \n \\    \n  o-o \n      \n      \n",
        "\n      \no-o   \n|  \\  \n|   O \n|  /  \no-o   \n      \n      \n",
        "\n     \no--o \n|    \nO-o  \n|    \no--o \n     \n     \n",
        "\n     \no--o \n|    \nO-o  \n|    \no    \n     \n     \n",
        "\n      \n o-o  \no     \n|  -o \no   | \n o-o  \n      \n      \n",
        "\n     \no  o \n|  | \nO--O \n|  | \no  o \n     \n     \n",
        "\n      \no-O-o \n  |   \n  |   \n  |   \no-O-o \n      \n      \n",
        "\n      \n    o \n    | \n    | \n\\   o \n o-o  \n      \n      \n",
        "\n     \no  o \n| /  \nOO   \n| \\  \no  o \n     \n     \n",
        "\n      \no     \n|     \n|     \n|     \nO---o \n      \n      \n",
        "\n      \no   o \n|\\ /| \n| O | \n|   | \no   o \n      \n      \n",
        "\n      \no   o \n|\\  | \n| \\ | \n|  \\| \no   o \n      \n      \n",
        "\n      \n o-o  \no   o \n|   | \no   o \n o-o  \n      \n      \n",
        "\n      \no--o  \n|   | \nO--o  \n|     \no     \n      \n      \n",
        "\n      \n o-o  \no   o \n|   | \no   O \n o-O\\ \n      \n      \n",
        "\n      \no--o  \n|   | \nO-Oo  \n|  \\  \no   o \n      \n      \n",
        "\n      \n o-o  \n|     \n o-o  \n    | \no--o  \n      \n      \n",
        "\n      \no-O-o \n  |   \n  |   \n  |   \n  o   \n      \n      \n",
        "\n      \no   o \n|   | \n|   | \n|   | \n o-o  \n      \n      \n",
        "\n      \no   o \n|   | \no   o \n \\ /  \n  o   \n      \n      \n",
        "\n          \no       o \n|       | \no   o   o \n \\ / \\ /  \n  o   o   \n          \n          \n",
        "\n      \no   o \n \\ /  \n  O   \n / \\  \no   o \n      \n      \n",
        "\n      \no   o \n \\ /  \n  O   \n  |   \n  o   \n      \n      \n",
        "\n      \no---o \n   /  \n -O-  \n /    \no---o \n      \n      \n",
        "\n    \nO-o \n|   \n|   \n|   \nO-o \n    \n    \n",
        "\n      \no     \n \\    \n  o   \n   \\  \n    o \n      \n      \n",
        "\n    \no-O \n  | \n  | \n  | \no-O \n    \n    \n",
        "\n    \n o  \n/ \\ \n    \n    \n    \n    \n    \n",
        "\n      \n      \n      \n      \n      \no---o \n      \n      \n",
        "\n  \n0 \n| \n  \n  \n  \n  \n  \n",
        "\n     \n     \n     \n oo  \n| |  \no-o- \n     \n     \n",
        "\n     \no    \n|    \nO-o  \n|  | \no-o  \n     \n     \n",
        "\n     \n     \n     \n o-o \n|    \n o-o \n     \n     \n",
        "\n     \n   o \n   | \n o-O \n|  | \n o-o \n     \n     \n",
        "\n    \n    \n    \no-o \n|-' \no-o \n    \n    \n",
        "\n     \n o-o \n |   \n-O-  \n |   \n o   \n     \n     \n",
        "\n     \n     \n     \no--o \n|  | \no--O \n   | \no--o \n",
        "\n     \no    \n|    \nO--o \n|  | \no  o \n     \n     \n",
        "\n  \n  \no \n  \n| \n| \n  \n  \n",
        "\n      \n      \n    o \n      \n    o \n    | \no   o \n o-o  \n",
        "\n     \no    \n| /  \nOO   \n| \\  \no  o \n     \n     \n",
        "\n  \no \n| \n| \n| \no \n  \n  \n",
        "\n      \n      \n      \no-O-o \n| | | \no o o \n      \n      \n",
        "\n     \n     \n     \no-o  \n|  | \no  o \n     \n     \n",
        "\n    \n    \n    \no-o \n| | \no-o \n    \n    \n",
        "\n     \n     \n     \no-o  \n|  | \nO-o  \n|    \no    \n",
        "\n     \n     \n     \n o-o \n|  | \n o-O \n   | \n   o \n",
        "\n    \n    \n    \no-o \n|   \no   \n    \n    \n",
        "\n    \n    \n    \no-o \n \\  \no-o \n    \n    \n",
        "\n    \n o  \n |  \n-o- \n |  \n o  \n    \n    \n",
        "\n     \n     \n     \no  o \n|  | \no--o \n     \n     \n",
        "\n      \n      \n      \no   o \n \\ /  \n  o   \n      \n      \n",
        "\n          \n          \n          \no   o   o \n \\ / \\ /  \n  o   o   \n          \n          \n",
        "\n    \n    \n    \n\\ / \n o  \n/ \\ \n    \n    \n",
        "\n     \n     \n     \no  o \n|  | \no--O \n   | \no--o \n",
        "\n    \n    \n    \no-o \n /  \no-o \n    \n    \n",
        "\n      \n  o-o \n  |   \no-O   \n  |   \n  o-o \n      \n      \n",
        "\n  \no \n| \no \n| \no \n  \n  \n",
        "\n      \no-o   \n  |   \n  O-o \n  |   \no-o   \n      \n      \n",
        "\n o_ / \n/  o  \n      \n      \n      \n      \n      \n      \n"
      ];

    // Function to generate a random position within the window dimensions
    function getRandomPosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomTop = Math.floor(Math.random() * (windowHeight - 60)); // Adjust 60 to fit your box height
        const randomLeft = Math.floor(Math.random() * (windowWidth - 60)); // Adjust 60 to fit your box width
        return { top: randomTop, left: randomLeft };
    }

    // Function to generate a random animation duration between 2 to 14 seconds
    function getRandomAnimationDuration() {
        return Math.floor(Math.random() * (14000 - 5000 + 1)) + 2000; // Random number between 2000 and 14000 milliseconds (2 to 14 seconds)
    }

    // Apply random position and random animation duration to each box
    function applyRandomPositions() {
        boxes.forEach(function(box) {
            const randomPosition = getRandomPosition();
            box.style.top = `${randomPosition.top}px`;
            box.style.left = `${randomPosition.left}px`;

            // Get a random animation duration
            const animationDuration = getRandomAnimationDuration();
            box.style.animationDuration = `${animationDuration / 1000}s`;

            // Set ASCII art for the box
            // box.innerText = asciiArtData[index % asciiArtData.length];

             // Set the text content of the <code> element inside the box
            const codeElement = box.querySelector('h2');
            if (codeElement) {
                codeElement.textContent = asciiArtData[Math.floor(Math.random() * asciiArtData.length)];
            }

            // Set a timeout to reset position after animation duration
            setTimeout(function() {
                applyRandomPosition(box);
            }, animationDuration);
        });
    }

    // Initially apply random positions
    applyRandomPositions();

    // Apply new random positions based on animation durations
    function applyRandomPosition(box) {
        const randomPosition = getRandomPosition();
        box.style.top = `${randomPosition.top}px`;
        box.style.left = `${randomPosition.left}px`;

        // Get a random animation duration
        const animationDuration = getRandomAnimationDuration();
        box.style.animationDuration = `${animationDuration / 1000}s`;

        // Set ASCII art for the box
        // box.innerText = asciiArtData[Math.floor(Math.random() * asciiArtData.length)];

        const codeElement = box.querySelector('h2');
            if (codeElement) {
                codeElement.textContent = asciiArtData[Math.floor(Math.random() * asciiArtData.length)];
            }

        // Set a timeout to reset position after animation duration
        setTimeout(function() {
            applyRandomPosition(box);
        }, animationDuration);
    }

});
