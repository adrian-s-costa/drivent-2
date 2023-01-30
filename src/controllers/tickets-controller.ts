import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketService from "@/services/tickets-service"

export async function getTickets(req: AuthenticatedRequest, res: Response){
    try {
        const tickets = await ticketService.getAllTickets();
        return res.status(httpStatus.OK).send(tickets);
    }catch (error){
        return res.status(httpStatus.UNAUTHORIZED).send({});
    }
}

export async function getTicketsById(req: AuthenticatedRequest, res: Response){
    const userId = parseInt(res.locals.userId);
    try {
        const result = await ticketService.getTicketsTypes(userId);
        if(!result) {
            return res.sendStatus(404);
        }
        return res.status(200).send(result);
    }catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send({});
    }
}