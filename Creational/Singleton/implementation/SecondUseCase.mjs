import logger from "./FancyLogger.mjs";

export default function logSecondUseCase () {
    logger.printLogCount();
    logger.log('First File');
    logger.printLogCount();
}