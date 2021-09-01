from rest_framework import routers

from backend.urls import router_b
from accounts.urls import router_acc

class DefaultRouter(routers.DefaultRouter):

    def extend(self, router):
        self.registry.extend(router.registry)

router = routers.DefaultRouter()

router.extend(router_b)
router.extend(router_acc)
