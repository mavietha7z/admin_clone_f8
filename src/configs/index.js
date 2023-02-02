import sidebar from './sidebar';
import home from './home';

const config = {
    sidebar,
    home,
};

export const iso8601ToTimeString = (timeVideo) => {
    const regexp = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    const matches = regexp.exec(timeVideo);

    if (!matches) return '';
    let hours = matches[1] ? parseInt(matches[1]) : 0;
    let minutes = matches[2] ? parseInt(matches[2]) : 0;
    let seconds = matches[3] ? parseInt(matches[3]) : 0;
    if (hours > 0) {
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        return `${hours}:${minutes}:${seconds}`;
    } else {
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    }
};

export default config;
