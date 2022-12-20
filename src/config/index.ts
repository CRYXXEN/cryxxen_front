import {instance} from "./api"

export const requests = {
  getMission: () => instance.get('/v1_client/mission'),
  getProjects: () => instance.get('/v1_client/projetcs'),
  getReviews: () => instance.get('/v1_client/reviews'),
  getServices: () => instance.get('/v1_client/services'),
  getTeam: () => instance.get('/v1_client/team')
}