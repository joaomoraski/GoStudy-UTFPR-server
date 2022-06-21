import { BrowseReservationUseCase } from './BrowseReservationUseCase';
import { BrowseReservationController} from './BrowseReservationController';
import { ReservationRepository } from '../../implementations/ReservationRepository';

const reservationRepository = new ReservationRepository();
const browseReservationUseCase = new BrowseReservationUseCase(
    reservationRepository
);

const browseReservationController = new BrowseReservationController(
    browseReservationUseCase
);

export { browseReservationUseCase, browseReservationController };