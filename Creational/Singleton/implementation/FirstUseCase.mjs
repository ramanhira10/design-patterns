import logger from "./FancyLogger.mjs";

export default function logFirstUseCase () {
    logger.printLogCount();
    logger.log('Second File');
    logger.printLogCount();
}